import { Waypoint } from ".."

export default () => {
    return (
        <section class="ftco-section contact-section ftco-no-pb" id="contact-section">
            <div class="container">
                <div class="row justify-content-center mb-5 pb-3">
                    <Waypoint classes="col-md-7 heading-section text-center">
                        <h1 class="big big-2">Contact</h1>
                        <h2 class="mb-4">Contact Me</h2>
                        <p>Feel free to reach out to me for work opportunities, collaboration, or just to connect.</p>
                    </Waypoint>
                </div>

                <div class="row d-flex contact-info mb-5">
                    <Waypoint classes="col-md-6 col-lg-3 d-flex">
                        <div class="align-self-stretch box text-center p-4 shadow">
                            <div class="icon d-flex align-items-center justify-content-center">
                                <span class="icon-map-signs"></span>
                            </div>
                            <div>
                                <h3 class="mb-4">Address</h3>
                                <p>West Bandung Regency</p>
                            </div>
                        </div>
                    </Waypoint>
                    <Waypoint classes="col-md-6 col-lg-3 d-flex">
                        <div class="align-self-stretch box text-center p-4 shadow">
                            <div class="icon d-flex align-items-center justify-content-center">
                                <span class="icon-phone2"></span>
                            </div>
                            <div>
                                <h3 class="mb-4">Contact Number</h3>
                                <p><a href="tel://1234567920">+62 8772 4039 619</a></p>
                            </div>
                        </div>
                    </Waypoint>
                    <Waypoint classes="col-md-6 col-lg-3 d-flex">
                        <div class="align-self-stretch box text-center p-4 shadow">
                            <div class="icon d-flex align-items-center justify-content-center">
                                <span class="icon-paper-plane"></span>
                            </div>
                            <div>
                                <h3 class="mb-4">Email Address</h3>
                                <p><a href="mailto:fikrmuhammadhaq@gmail.com">fikrm..@gmail.com</a></p>
                            </div>
                        </div>
                    </Waypoint>
                    <Waypoint classes="col-md-6 col-lg-3 d-flex">
                        <div class="align-self-stretch box text-center p-4 shadow">
                            <div class="icon d-flex align-items-center justify-content-center">
                                <img src="images/linkedin.png" style={{ height: '100%', height: '50px' }} />
                            </div>
                            <div>
                                <h3 class="mb-4">LinkedIn</h3>
                                <p><a href="https://www.linkedin.com/in/fikr-muhammad-h-a68629205">linkedin.com</a></p>
                            </div>
                        </div>
                    </Waypoint>
                </div>
            </div>
        </section>
    )
}