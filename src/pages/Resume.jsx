export default function Resume() {
  return (
    <>
      <h1 className="resumeh1">Resume</h1>
      <br></br>
      <div className="projects">
        <div className="summary">
          <h2>- Summary -</h2>
          <p>
            Hard-working and loyal with a knack for picking up new skills
            quickly. I'm diving into coding and eager to put my growing skills
            to use. Reliable and always ready to tackle new challenges with
            enthusiasm. For more information on my work, please visit
            https://github.com/Schultzy1405?tab=repositories
          </p>
        </div>
        <br></br>
        <div className="workExperience">
          <h2>- Work Experience -</h2>
          <section>
            <h4>Regular Package Car Driver</h4>
            <p>UPS - Belton, Texas</p>
            <p>November 2018 to June 2021</p>
            <h6>Drove the brown mail trucks on dedicated routes.</h6>
          </section>
        </div>
        <br></br>
        <div className="skills">
          <h2>- Skills -</h2>
          <ul className="skills-list">
            <li>Javascript</li>
            <li>HTML5</li>
            <li>CSS</li>
            <li>React</li>
            <li>API's</li>
            <li>Node</li>
            <li>Github</li>
          </ul>
        </div>
        <br></br>
        <div className="Education">
          <h2>- Education -</h2>
          <ul>
            <li>University of Texas Austin Coding Bootcamp</li>
            <li>Wild Rose High School</li>
          </ul>
        </div>
      </div>
    </>
  );
}
