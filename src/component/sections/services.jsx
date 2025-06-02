import FullHeightDiv, { Waypoint } from ".."

export default () => {
    const services = [
        {
            "title": "Web Development",
            "icon_class": "flaticon-analysis",
            "description": "I build responsive web apps like LMS, CMS, inventory, and company profiles using React, Vite, Tailwind, and Zustand—focusing on smooth UI and efficient state management to boost performance across various industries"
        },
        {
            "title": "Mobile Development",
            "icon_class": "flaticon-flasks",
            "description": "Using Flutter, I create sleek UIs and integrate API data, with experience mainly in Android development and openness to expanding into iOS apps."
        },
        {
            "title": "Backend Development",
            "icon_class": "flaticon-ideas",
            "description": "Building and managing APIs with Node.js and Express, using PostgreSQL and MongoDB for data storage, and providing clear API documentation tailored to project needs."
        },
      
    ]
    return (
        <section class="ftco-section" id="services-section">
            <div class="container-fluid px-md-5">
                <div class="row justify-content-center py-5 mt-5">
                    <Waypoint animateEffect="fadeInUp" classes="col-md-12 heading-section text-center ">
                        <h1 class="big big-2">Services</h1>
                        <h2 class="mb-4">Services</h2>
                        <p>Services Aligned with My Expertises and Professional Experience</p>
                    </Waypoint>
                </div>
                <div class="row">
                    {
                        services.map((el, i) => {
                            return (
                                <Waypoint animateEffect="fadeInUp" classes="col-md-4 text-center d-flex ">
                                    <a href="#" class="services-1 shadow">
                                        <span class="icon">
                                            <i class={el.icon_class}></i>
                                        </span>
                                        <div class="desc">
                                            <h3 class="mb-5">{el.title}</h3>
                                            <p>{el.description}</p>
                                        </div>
                                    </a>
                                </Waypoint>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}