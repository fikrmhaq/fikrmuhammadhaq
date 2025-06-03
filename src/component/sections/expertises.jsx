import { useEffect, useRef, useState } from "react";
import { Waypoint } from ".."
import { useObserveSection } from "../../hooks";
import { scrollToSection } from "../../function";

export default () => {
    const navRef = useRef(null);
    const [currentId, setCurrentId] = useState(null);
    const sectionRefs = useRef([]);
    const [refed, onEducation] = useObserveSection()
    const [refex, onExperience] = useObserveSection()
    const [refski, onSkill] = useObserveSection()
    const [refawa, onAward] = useObserveSection()

    useEffect(() => {
        const navLinks = navRef.current?.querySelectorAll('a');

        sectionRefs.current = Array.from(navLinks || []).map(link => {
            const target = document.querySelector(link.getAttribute('href'));
            return target;
        });

        const handleClick = (e) => {
            e.preventDefault();
            const target = document.querySelector(e.currentTarget.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 180,
                    behavior: 'smooth',
                });
                window.history.pushState(null, '', e.currentTarget.getAttribute('href'));
            }
        };

        const handleScroll = () => {
            const scrollTop = window.scrollY + window.innerHeight / 2;
            let newId = null;

            for (const section of sectionRefs.current) {
                if (section && scrollTop > section.offsetTop) {
                    newId = section.id;
                }
            }

            if (newId !== currentId) {
                setCurrentId(newId);
            }
        };

        navLinks?.forEach(link => {
            link.addEventListener('click', handleClick);
        });
        window.addEventListener('scroll', handleScroll);

        return () => {
            navLinks?.forEach(link => {
                link.removeEventListener('click', handleClick);
            });
            window.removeEventListener('scroll', handleScroll);
        };
    }, [currentId]);
    const educations = [
        {
            "icon": "flaticon-ideas",
            "date": "2017-2020",
            "title": "Highschool Diploma",
            "position": "SMK Negeri 11 Bandung",
            "description": "A vocational high school program by SEAMEO SEAMOLEC designed for working students. I chose the Software Engineering track, allowing me to work while studying and pursue my passion for technology and programming."
        },
        {
            "icon": "flaticon-ideas",
            "date": "2020-2023",
            "title": "Associate's Degree/Diploma 3",
            "position": "Politeknik Elektronika Negeri Surabaya",
            "description": "A distance learning program by SEAMEO and EEPIS allowed me to study Computer Science for three years while working as a software engineer. This dual path gave me both solid academic knowledge and real-world experience in software development."
        },
        {
            "icon": "flaticon-ideas",
            "date": "2023-2025",
            "title": "Bachelor's Degree",
            "position": "Universitas Logistik dan Bisnis Internasional",
            "description": " began a bachelor's program in Computer Science to build on my associate's degree while continuing to work as a software engineer. This path lets me balance study and work, and it recognizes my prior education, making the journey more efficient."
        }
    ]

    const experiences = [
        {
            "icon": "flaticon-ideas",
            "date": "2020-2023",
            "title": "Software Engineer",
            "position": "Dinas Pendidikan Provinsi Jawa Barat",
            "description": "Worked on multiple projects for the West Java Education Department (Tikomdik Division), developing web apps with React (Vite.js, CRA, Next.js + Zustand) and mobile apps with Flutter. Built back-ends using Express.js, PostgreSQL, MongoDB (via Sequelize/Mongoose), and used Redis for caching."
        },
        {
            "icon": "flaticon-ideas",
            "date": "2022-2023",
            "title": "Frontend Developer",
            "position": "PT. Astra Daihatsu Motors",
            "description": "Worked on one of the PT. Astra Daihatsu Motor's CSR Program's Web Applications using React with ViteJS environment and Zustand as the state management."
        },
        {
            "icon": "flaticon-ideas",
            "date": "2022-2024",
            "title": "Fullstack Developer",
            "position": "SMKS Al-Mufti",
            "description": "Building web/mobile apps for some of management procedures such as inventory, scheduling, etc."
        }
    ]

    const certificates = [
        {
            "date": "2020",
            "title": "Intellectual Property",
            "position": "Kemenkumham RI",
            "description": "Awarded an Intellectual Property certificate as one of the inventors of the Atikan Learning Management System, developed  at the Dinas Pendidikan Provinsi Jawa Barat."
        },
        {
            "date": "2023",
            "title": "Cum Laude Distinction",
            "position": "Politeknik Elektronika Negeri Surabaya",
            "description": "Graduated with an Associate’s Degree (Diploma 3) and a GPA of 3.65 on a 4.00 scale. Earned Cum Laude honors in recognition of outstanding academic achievement."
        }
    ]

    const skillsCircle = [
        { name: 'React', value: 90 },
        { name: 'Flutter', value: 80 },
        { name: 'Express', value: 70 },
    ];

    const skillsBar = [
        { name: 'Tailwind', value: 95, color: 'bg-blue-500' },
        { name: 'Redux', value: 70, color: 'bg-green-500' },
        { name: 'MaterialUI', value: 90, color: 'bg-pink-500' },
        { name: 'Zustand', value: 85, color: 'bg-yellow-500' },
        { name: 'PostgreSQL', value: 70, color: 'bg-purple-500' },
        { name: 'Sequelize', value: 75, color: 'bg-red-500' },
    ];

    const sectionsList = ['page-1', 'page-2', 'page-3', 'page-4'];

    return (
        <section className="ftco-section ftco-no-pb goto-here" id="resume-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">

                        <nav id="navi" ref={navRef}>
                            <ul>
                                {/* {JSON.stringify(currentId)} */}
                                <li><a className={onEducation ? 'current' : ''} onClick={() => scrollToSection('page-1')}>Education</a></li>
                                <li><a className={onExperience ? 'current' : ''} onClick={() => scrollToSection('page-2')}>Experience</a></li>
                                <li><a className={onSkill ? 'current' : ''} onClick={() => scrollToSection('page-3')}>Skills</a></li>
                                <li><a className={onAward ? 'current' : ''} onClick={() => scrollToSection('page-4')} >Certificates</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-md-9">
                        <div ref={refed} id="page-1" className="page one">
                            <h2 className="heading">Education</h2>
                            {educations.map((el, i) => (
                                <Waypoint key={i} animateEffect="fadeInUp" classes="resume-wrap d-flex">
                                    <div className="icon d-flex align-items-center justify-content-center">
                                        <span className="flaticon-ideas"></span>
                                    </div>
                                    <div className="text pl-3">
                                        <span className="date">{el.date}</span>
                                        <h2>{el.title}</h2>
                                        <span className="position">{el.position}</span>
                                        <p>{el.description}</p>
                                    </div>
                                </Waypoint>
                            ))}
                        </div>

                        <div ref={refex} id="page-2" className="page two">
                            <h2 className="heading">Experience</h2>
                            {experiences.map((el, i) => (
                                <Waypoint key={i} animateEffect="fadeInUp" classes="resume-wrap d-flex">
                                    <div className="icon d-flex align-items-center justify-content-center">
                                        <span className="flaticon-ideas"></span>
                                    </div>
                                    <div className="text pl-3">
                                        <span className="date">{el.date}</span>
                                        <h2>{el.title}</h2>
                                        <span className="position">{el.position}</span>
                                        <p>{el.description}</p>
                                    </div>
                                </Waypoint>
                            ))}
                        </div>

                        <div ref={refski} id="page-3" className="page three">
                            <h2 className="heading">Skills</h2>
                            <div className="row progress-circle mb-5">
                                {skillsCircle.map((el, i) => (
                                    <div className="col-lg-4 mb-4" key={i}>
                                        <div className="bg-white rounded-lg shadow p-4">
                                            <h2 className="h5 font-weight-bold text-center mb-4">{el.name}</h2>
                                            <div className="progress mx-auto" data-value="75">
                                                <span className="progress-left">
                                                    <span className="progress-bar border-primary"></span>
                                                </span>
                                                <span className="progress-right">
                                                    <span className="progress-bar border-primary"></span>
                                                </span>
                                                <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                                                    <div className="h2 font-weight-bold">{el.value}<sup className="small">%</sup></div>
                                                </div>
                                            </div>
                                            <div className="row text-center mt-4">
                                                <div className="col-6 border-right">
                                                    <div className="h4 font-weight-bold mb-0">28%</div><span className="small text-gray">Last week</span>
                                                </div>
                                                <div className="col-6">
                                                    <div className="h4 font-weight-bold mb-0">60%</div><span className="small text-gray">Last month</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div class="row">
                                {
                                    skillsBar.map((el, i) => {
                                        return (
                                            <div class="col-md-6 animate-box">
                                                <Waypoint animateEffect="fadeInUp" classes="progress-wrap">
                                                    <h3>{el.name}</h3>
                                                    <div class="progress">
                                                        <div class="progress-bar color-1" role="progressbar" aria-valuenow="90"
                                                            aria-valuemin="0" aria-valuemax="100" style={{ width: `${el.value}%` }}>
                                                            <span>{el.value}%</span>
                                                        </div>
                                                    </div>
                                                </Waypoint>
                                            </div>
                                        )
                                    })
                                }

                            </div>
                        </div>
                        <div id="page-4" class="page four" ref={refawa}>
                            <h2 class="heading">Certificates</h2>
                            {
                                certificates.map((el, i) => {
                                    return (
                                        <Waypoint animateEffect="fadeInUp" classes="resume-wrap d-flex">
                                            <div class="icon d-flex align-items-center justify-content-center">
                                                <span class="flaticon-ideas"></span>
                                            </div>
                                            <div class="text pl-3">
                                                <span class="date">{el.date}</span>
                                                <h2>{el.title}</h2>
                                                <span class="position">{el.position}</span>
                                                <p>{el.description}</p>
                                            </div>
                                        </Waypoint>
                                    )
                                })
                            }
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}