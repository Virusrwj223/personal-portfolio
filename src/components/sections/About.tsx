import resume from "../../assets/HrishirajMandalResume.pdf";
import raj from "../../assets/raj.jpg";
import hackathon from "../../assets/hackathon.jpg";
import fellowship from "../../assets/fellowship.jpg";

export default function About() {
  return (
    <section className="about">
      <div className="about-grid">
        <div className="about-text">
          <p className="text-secondary">
            I am a Computer Science student at National University of Singapore
            (NUS) with interests in{" "}
            <strong>formal methods and cyber-security</strong>.
          </p>

          <p>
            <strong>Research Statement: </strong>I envison a world ran by
            reliable systems guaranteed by the precision of Mathematics.
          </p>

          <p>
            Currently, I am involved in ensuring cyber-security properties of
            computing hardware for my final year research work. I had spent an
            undergraduate summer in the United Kingdom, in the lab of Mirco
            Giacobbe, to formally verify and improve a space protocol. My
            previous works involves implementing a interpreter for a new
            specification language and, improving the explainability of
            black-box forecasting models.
          </p>

          <div className="cta-buttons">
            <a href={resume} target="_blank" className="btn-primary">
              Resume
            </a>

            <a href="/contact" className="btn-secondary">
              Contact Me
            </a>
          </div>
        </div>

        <div className="about-image">
          <img src={raj} alt="profile" />
        </div>
      </div>

      <div className="about-awards">
        <h3>Key Highlights</h3>

        <div className="awards-grid">
          <a
            href={hackathon}
            target="_blank"
            rel="noopener noreferrer"
            className="award-card-link"
          >
            <div className="award-card">
              <h4>1st Place – NUS Fintech Summit Hackathon 2024</h4>
              <p>
                Awarded $5000 and led team to the development of a winning
                solution.
              </p>
            </div>
          </a>

          <a
            href={fellowship}
            target="_blank"
            rel="noopener noreferrer"
            className="award-card-link"
          >
            <div className="award-card">
              <h4>SmartKarma Fellowship 2025</h4>
              <p>
                Awarded ~$5000 for a competitive fellowship recognising
                technical potential, leadership and impactful work.
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
