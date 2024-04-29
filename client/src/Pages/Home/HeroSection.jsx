export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey 👋 , I'm Chetana More</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            Full Stack Developer ||
            Graduation in Master of Computer Application(MCA) at North Maharashtra
            Jalgaon University || Full Stack ||
            <br /> A passionate Full Stack Developer
          </p>
        </div>
        <div className="HomeButton">
          <a href="https://drive.google.com/file/d/19KUfmuN2eG6HqEBkiB8-3FJT_Nxn6zvb/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">
            <button className="btn btn-primary">Download Resume</button>
          </a>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="./img/photo.png" alt="Hero Section" />
        
      </div>
    </section>
  );
}
