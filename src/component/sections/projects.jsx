import FullHeightDiv, { Waypoint } from ".."

export default () => {
  const projects = [
    {
      "title": "Learning Management System",
      "category": "Web Development",
      "image_url": "url(images/LMS.png)"
    },
    {
      "title": "Educational Management System",
      "category": "Web Development",
      "image_url": "url(images/ams.jpg)"
    },
    {
      "title": "Residence Management System",
      "category": "Web/Mobile Development",
      "image_url": "url(images/rute.png)"
    },
    {
      "title": "Inventory Management",
      "category": "Web/Mobile Development",
      "image_url": "url(images/inventory.jpg)"
    },
    {
      "title": "Guest Book",
      "category": "Mobile Development",
      "image_url": "url(images/guestbook.png)"
    },
    {
      "title": "Daihatsu Schools Monitoring System",
      "category": "Web Development",
      "image_url": "url(images/pbd.jpg)"
    },
  ]
  return (
    <section class="ftco-section ftco-project" id="projects-section">
      <div class="container-fluid px-md-0">
        <div class="row no-gutters justify-content-center pb-5">
          <Waypoint animateEffect="fadeInUp" classes="col-md-12 heading-section text-center ">
            <h1 class="big big-2">Projects</h1>
            <h2 class="mb-4">My Projects</h2>
            <p>Here are some key projects I've worked on at various companies.</p>
          </Waypoint>
        </div>
        <div class="row no-gutters">
          {
            projects.map((el, i) => {
              return (
                <div class="col-md-4">
                  <Waypoint animateEffect="fadeInUp" classes="project img d-flex justify-content-center align-items-center" style={{ backgroundImage: el.image_url }}>
                    <div class="overlay"></div>
                    <div class="text text-center p-4">
                      <h3><a href="#">{el.title}</a></h3>
                      <span>{el.category}</span>
                    </div>
                  </Waypoint>
                </div>
              )
            })
          }

        </div>
      </div>
    </section>
  )
}