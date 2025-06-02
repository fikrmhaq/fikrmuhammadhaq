import FullHeightDiv, { Waypoint } from ".."

export default () => {
    const partners = [
        "/images/react.png",
        "/images/flutter.png",
        "/images/express.png",
        "/images/postgresql.png",
        "/images/tailwind.png"
    ]
    return (
        <section class="ftco-section ftco-partner">
            <div class="container">
                <div class="row">
                    {
                        partners.map((el, i) => {
                            let customStyle = {
                                "/images/express.png": {marginTop:'10px'},
                                "/images/tailwind.png": {marginTop:'7px'}
                            }
                            return (
                                <Waypoint animateEffect="fadeInUp " classes="col-sm" style={Object.keys(customStyle).includes(el) ? customStyle[el] : {}}>
                                    {/* <div class=""> */}
                                        <a href="#" class="partner"><img src={el} class="img-fluid" alt="Colorlib Template" /></a>
                                    {/* </div> */}
                                </Waypoint>
                            )
                        })
                    }
                   
                </div>
            </div>
        </section>
    )
}