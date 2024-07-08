import React from "react";
import Cyber from "../assets/Cyber-Sleuth.png";
import Payroll from "../assets/Payroll-Tracker.png";
import Quizlets from "../assets/Quizlets.png";
import taskBoard from "../assets/Task-Board.png";
import techBlog from "../assets/Tech-Blog.png";

export default function Project() {
  return (
    <div className="portfolio-container">
      <section className="Portfolio">
        <h2>Cyber Sleuth</h2>
        <a href="https://github.com/SailorVirgo/Cyber-Sleuth-Sous-Chef">
          <img
            className="portfolioImg"
            src={Cyber}
            alt="Screenshot of Cyber Sleuth project"
          />
        </a>
        <div className="project-links">
          <a href="https://github.com/schultzy1405">GitHub</a>
          {/* Add other links as needed */}
        </div>
      </section>

      <section className="Portfolio">
        <h2>Payroll Tracker</h2>
        <a href="https://github.com/Schultzy1405/Payroll-Tracker">
          <img
            className="portfolioImg"
            src={Payroll}
            alt="Screenshot of Payroll Tracker project"
          />
        </a>
        <div className="project-links">
          <a href="https://github.com/schultzy1405">GitHub</a>
          {/* Add other links as needed */}
        </div>
      </section>

      <section className="Portfolio">
        <h2>Quizlets</h2>
        <a href="https://github.com/Schultzy1405/Quizlet">
          <img
            className="portfolioImg"
            src={Quizlets}
            alt="Screenshot of Quizlets project"
          />
        </a>
        <div className="project-links">
          <a href="https://github.com/schultzy1405">GitHub</a>
          {/* Add other links as needed */}
        </div>
      </section>

      <section className="Portfolio">
        <h2>Task Board</h2>
        <a href="https://github.com/Schultzy1405/Task-Board">
          <img
            className="portfolioImg"
            src={taskBoard}
            alt="Screenshot of Task Board project"
          />
        </a>
        <div className="project-links">
          <a href="https://github.com/schultzy1405">GitHub</a>
          {/* Add other links as needed */}
        </div>
      </section>

      <section className="Portfolio">
        <h2>Tech Blog</h2>
        <a href="https://github.com/Schultzy1405/Tech-Blog">
          <img
            className="portfolioImg"
            src={techBlog}
            alt="Screenshot of Tech Blog project"
          />
        </a>
        <div className="project-links">
          <a href="https://github.com/schultzy1405">GitHub</a>
          {/* Add other links as needed */}
        </div>
      </section>
    </div>
  );
}
