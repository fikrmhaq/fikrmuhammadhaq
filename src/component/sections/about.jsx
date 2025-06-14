import FullHeightDiv, { Waypoint } from ".."
import { handleDownload } from "../../function"

export default () => {
    return (
        <section
            className="ftco-about img ftco-section ftco-no-pt ftco-no-pb"
            id="about-section"
            style={{ overflowX: 'hidden' }} // prevent horizontal overflow just in case
        >
            <div className="container">
                <div className="row d-flex no-gutters flex-wrap"> {/* allow wrap on small screens */}
                    <div className="col-md-6 col-lg-6 d-flex">
                        <div className="img-about img d-flex align-items-stretch" style={{ minWidth: 0 }}>
                            <div className="overlay"></div>
                            <div
                                className="img d-flex align-self-stretch align-items-center"
                                style={{
                                    backgroundImage: 'url(images/about.jpeg)',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    width: '100%',
                                    height: '100%',
                                    minHeight: 300,
                                    minWidth: 0,
                                }}
                            ></div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-6 pl-md-5 py-5" style={{ minWidth: 0 }}>
                        <div className="row justify-content-start pb-3">
                            <Waypoint animateEffect="fadeInUp">
                                <div className="col-md-12 heading-section">
                                    <h1 className="big">About</h1>
                                    <h2 className="mb-4">About Me</h2>
                                    <p>
                                        Software engineer with ~5 years of experience, launched 3 web apps,
                                        completed 4 freelance projects, and built 8 prototypes.
                                    </p>
                                    <ul className="about-info mt-4 px-md-0 px-2">
                                        <li className="d-flex">
                                            <span>Name:</span> <span>Fikr Muhammad Haq</span>
                                        </li>
                                        <li className="d-flex">
                                            <span>Date of birth:</span> <span>May 22, 2001</span>
                                        </li>
                                        <li className="d-flex">
                                            <span>Address:</span> <span>West Bandung Regency</span>
                                        </li>
                                        <li className="d-flex">
                                            <span>Zip code:</span> <span>14055</span>
                                        </li>
                                        <li className="d-flex">
                                            <span>Email:</span> <span>fikrmuhammadhaq@gmail.com</span>
                                        </li>
                                        <li className="d-flex">
                                            <span>Phone: </span> <span>+62-8772-4039-619</span>
                                        </li>
                                    </ul>
                                </div>
                            </Waypoint>
                        </div>

                        <Waypoint classes="counter-wrap d-flex mt-md-3" animateEffect="fadeInUp">
                            <div className="text">
                                <p className="mb-4">
                                    <span className="number" data-number="120">
                                        15
                                    </span>
                                    <span style={{ marginLeft: '5px' }}>Project complete</span>
                                </p>
                                <p>
                                    <a onClick={handleDownload} className="btn btn-primary py-3 px-3" style={{ cursor: 'pointer' }}>
                                        Download CV
                                    </a>
                                </p>
                            </div>
                        </Waypoint>
                    </div>
                </div>
            </div>
        </section>
    )
    return (
        <section class="ftco-about img ftco-section ftco-no-pt ftco-no-pb" id="about-section">
            <div class="container">
                <div class="row d-flex no-gutters">
                    <div class="col-md-6 col-lg-6 d-flex">
                        <div class="img-about img d-flex align-items-stretch">
                            <div class="overlay"></div>
                            <div class="img d-flex align-self-stretch align-items-center" style={{ backgroundImage: 'url(images/about.jpeg)' }}>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6 pl-md-5 py-5">
                        <div class="row justify-content-start pb-3">
                            <Waypoint animateEffect='fadeInUp'>
                                <div class="col-md-12 heading-section ">
                                    <h1 class="big">About</h1>
                                    <h2 class="mb-4">About Me</h2>
                                    <p>Software engineer with ~5 years of experience, launched 3 web apps, completed 4 freelance projects, and built 8 prototypes.
                                    </p>
                                    <ul class="about-info mt-4 px-md-0 px-2">
                                        <li class="d-flex"><span>Name:</span> <span>Fikr Muhammad Haq</span></li>
                                        <li class="d-flex"><span>Date of birth:</span> <span>May 22, 2001</span></li>
                                        <li class="d-flex"><span>Address:</span> <span>West Bandung Regency</span></li>
                                        <li class="d-flex"><span>Zip code:</span> <span>14055</span></li>
                                        <li class="d-flex"><span>Email:</span> <span>fikrmuhammadhaq@gmail.com</span></li>
                                        <li class="d-flex"><span>Phone: </span> <span>+62-8772-4039-619</span></li>
                                    </ul>
                                </div>
                            </Waypoint>
                        </div>
                        <Waypoint classes="counter-wrap  d-flex mt-md-3" animateEffect="fadeInUp">
                            <div class="text">
                                <p class="mb-4">
                                    <span class="number" data-number="120">15</span>
                                    <span style={{ marginLeft: '5px' }}>Project complete</span>
                                </p>
                                <p><a onClick={handleDownload} class="btn btn-primary py-3 px-3">Download CV</a></p>
                            </div>
                        </Waypoint>
                    </div>
                </div>
            </div>
        </section>
    )
}