import selfImg from "../assets/IMG_0555.jpg";
export default function About() {
  return (
    <section className="about">
      <h1 className="about-me">About Me</h1>
      <div className="about-content">
        <img
          className="self-photo"
          src={selfImg}
          alt="Photo of father and daughter smiling."
        />
        <div className="text-content">
          <h4 className="about-header">Who I Am</h4>
          <p className="about-text">
            I'm Eyan Schultz, a father of two girls living in Texas, USA. My
            interest in coding started with my curiosity in websites. I was
            always fascinated by how they worked but never understood the code
            behind them. Completing UT Austin's coding bootcamp opened doors to
            a career I never imagined possible. Now, I'm excited to explore new
            opportunities and apply my newfound skills in the tech world.
          </p>
        </div>
      </div>
    </section>
  );
}
