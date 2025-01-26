import "../Styles/Projects.css"
import { Code, Globe } from "lucide-react";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="section-content">
        <h2 className="section-title">My Projects</h2>
        <div className="resume-download">
          <a
            href="https://resume-builder-test-new.masaischool.com/resume/public?resumeId=678bc39ff7b3074e9134e03f"
            download
            className="resume-btn"
          >
            Download My Resume
          </a>
        </div>
      </div>
      <div className="projects-grid">
        {/* Project 1 */}
        <div className="project-card">
          <img
            src="https://stubgroup.com/wp-content/uploads/2021/02/wiXtq4NPpGbNf6PEHTT4hg.jpg"
            alt="Amazon"
            className="project-image"
          />
          <div className="project-content">
            <h3>Amazon</h3>
            <p>
            The Header includes the Amazon logo, a search bar, account options, and cart details, designed to be fully responsive.
             The Navigation Bar offers categories like Electronics and Clothing in a horizontal layout for desktops and a collapsible
              menu for mobile. The Main Content displays featured products in a grid, each with an image, name, price, and 
              "Add to Cart" button. The Footer provides links to customer service, privacy policies, and social media icons.
               Clean CSS styling with hover effects ensures a minimalistic and interactive design.
            </p>
            <div className="project-links">
              <a
                href="https://github.com/DevadurgamNarasimha/Projects1/blob/main/Project1/Project1.html"
                target="Amazon"
                rel="Amazon"
              >
                <Code /> GitHub
              </a>
              <a
                href="https://projects1-k5vf.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Globe /> Live Demo
              </a>
            </div>
          </div>
        </div>
        {/* Project 2 */}
        <div className="project-card">
          <img
           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPCOFk-9nzcUOvmMhsqM3rvEs16F1AoW3hHg&s"
            alt="Tic_Tac_Toe"
            className="project-image"
          />
          <div className="project-content">
            <h3>Tic_Tac_Toe</h3>
            <p>
              Traffic Controller is a modern web application that simulates
              traffic light control and provides real-time traffic flow data
              visualization.
            </p>
            <div className="project-links">
              <a
                href="https://github.com/DevadurgamNarasimha/Projects1/blob/main/Project2/Project2.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Code /> GitHub
              </a>
              <a
                href="https://projects1-rm8x.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Globe /> Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;