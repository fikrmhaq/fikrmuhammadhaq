import FullHeightDiv, { Waypoint } from ".."
import { scrollToSection } from "../../function"

export default () => {
    return (
        <FullHeightDiv>
            <section class="hero-wrap" id="home-section">
                <div class="overlay"></div>
                <div class="container">
                    <FullHeightDiv className='row no-gutters slider-text justify-content-center align-items-center'>
                        <div class="row no-gutters slider-text justify-content-center align-items-center">
                            <Waypoint animateEffect="fadeInUp" >
                                <div class="">
                                    <div class="text text-center">
                                        <span class="subheading">Hey! I am</span>
                                        <h1>Fikr Muhammad Haq</h1>
                                        <h2>I'm a
                                            <span
                                            style={{marginLeft: '4px'}}
                                                class="txt-rotate"
                                                data-period="2000"
                                                data-rotate='[ "Frontend Developer.", "Mobile Developer.", "Backend Developer." ]'></span>
                                        </h2>
                                    </div>
                                </div>
                            </Waypoint>
                        </div>
                    </FullHeightDiv>
                </div>

                <div class="mouse">
                    <a  onClick={() => scrollToSection('about-section')} class="mouse-icon">
                        <div class="mouse-wheel"><span class="ion-ios-arrow-round-down"></span></div>
                    </a>
                </div>
            </section>
        </FullHeightDiv>
    )
}