import { useState } from 'react'
import FullHeightDiv, { Waypoint } from './component'
import Intro from './component/sections/intro'
import About from './component/sections/about'
import Technical from './component/sections/technical'
import Expertises from './component/sections/expertises'
import Services from './component/sections/services'
import Projects from './component/sections/projects'
import { handleDownload, scrollToSection } from './function'
import Contact from './component/sections/contact'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
	const [count, setCount] = useState(0)



	return (
		<>

			<nav class="navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light site-navbar-target" id="ftco-navbar">
				<div class="container">
					<a class="navbar-brand" href="index.html"><span>F</span>ikr</a>
					<button class="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
						<span class="oi oi-menu"></span> Menu
					</button>

					<div class="collapse navbar-collapse" id="ftco-nav">
						<ul class="navbar-nav nav ml-auto">
							<li class="nav-item"><a href="#home-section" class="nav-link"><span>Home</span></a></li>
							<li class="nav-item"><a href="#about-section" class="nav-link"><span>About</span></a></li>
							<li class="nav-item"><a href="#resume-section" class="nav-link"><span>Resume</span></a></li>
							<li class="nav-item"><a href="#services-section" class="nav-link"><span>Services</span></a></li>
							<li class="nav-item"><a href="#projects-section" class="nav-link"><span>Projects</span></a></li>
							<li class="nav-item"><a href="#contact-section" class="nav-link"><span>Contacts</span></a></li>
						</ul>
					</div>
				</div>
			</nav>
			<Intro />
			<About />
			<Technical />
			<Expertises />
			<Services />
			<Projects />
			<section class="ftco-section ftco-hireme img" style={{ backgroundImage: 'url(images/bg_1.jpg)' }} id="contact-section">
				<div class="overlay"></div>
				<div class="container">
					<div class="row justify-content-center">
						<Waypoint animateEffect='fadeInUp' classes="col-md-7  text-center">
							<h2>I'm <span>Open</span> to work</h2>
							<p>I am available to provide my expertise. Please don't hesitate to get in touch if you require any assistance.</p>
							<p class="mb-0"><a onClick={handleDownload} class="btn btn-primary py-3 px-5">Download CV</a></p>
						</Waypoint>
					</div>
				</div>
			</section>
			<Contact/>
			<footer class="ftco-footer ftco-section">
				<div class="container">
					<div class="row mb-5">
						<div class="col-md">
							<div class="ftco-footer-widget mb-4">
								<h2 class="ftco-heading-2">About</h2>
								<p>Software engineer with ~5 years of experience, launched 3 web apps, completed 4 freelance projects, and built 8 prototypes.</p>
								<ul class="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
									<li class="ftco-animate"><a href="#"><span class="icon-twitter"></span></a></li>
									<li class="ftco-animate"><a href="#"><span class="icon-facebook"></span></a></li>
									<li class="ftco-animate"><a href="#"><span class="icon-instagram"></span></a></li>
								</ul>
							</div>
						</div>
						<div class="col-md">
							<div class="ftco-footer-widget mb-4 ml-md-4">
								<h2 class="ftco-heading-2">Links</h2>
								<ul class="list-unstyled">
									<li><a onClick={() => scrollToSection('home-section')}><span class="icon-long-arrow-right mr-2"></span>Home</a></li>
									<li><a onClick={() => scrollToSection('about-section')}><span class="icon-long-arrow-right mr-2"></span>About</a></li>
									<li><a onClick={() => scrollToSection('resume-section')}><span class="icon-long-arrow-right mr-2"></span>Resume</a></li>
									<li><a onClick={() => scrollToSection('services-section')}><span class="icon-long-arrow-right mr-2"></span>Services</a></li>
									<li><a onClick={() => scrollToSection('projects-section')}><span class="icon-long-arrow-right mr-2"></span>Projects</a></li>
								</ul>
							</div>
						</div>
						<div class="col-md">
							<div class="ftco-footer-widget mb-4">
								<h2 class="ftco-heading-2">Services</h2>
								<ul class="list-unstyled">
									<li><a href="#"><span class="icon-long-arrow-right mr-2"></span>Web Development</a></li>
									<li><a href="#"><span class="icon-long-arrow-right mr-2"></span>Mobile Development</a></li>
									<li><a href="#"><span class="icon-long-arrow-right mr-2"></span>Backend Development</a></li>
								</ul>
							</div>
						</div>
						<div class="col-md">
							<div class="ftco-footer-widget mb-4">
								<h2 class="ftco-heading-2">Have a Questions?</h2>
								<div class="block-23 mb-3">
									<ul>
										<li><span class="icon icon-map-marker"></span><span class="text">West Bandung Regency, West Java</span></li>
										<li><a href="#"><span class="icon icon-phone"></span><span class="text">+62-8772-4039-619</span></a></li>
										<li><a href="#"><span class="icon icon-envelope"></span><span class="text" style={{ marginLeft: '10px' }}> fikrmuhammadhaq@gmail.com</span></a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-md-12 text-center">

							<p>
								Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="icon-heart color-danger" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a></p>
						</div>
					</div>
				</div>
			</footer>
		</>
	)
}

export default App
