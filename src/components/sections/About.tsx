export default function About() {
  return (
    <section className="about">
      <div className="about-grid">
        <div className="about-text">
          <p className="text-secondary">
            I am a Computer Science student at NUS with interests in{" "}
            <strong>
              formal verification, security and programming languages
            </strong>
            .
          </p>

          <p>
            I enjoy working on problems at the intersection of programming
            languages and real-world systems, especially where correctness and
            security matter.
          </p>

          <div className="cta-buttons">
            <a
              href="..\..\src\assets\HrishirajMandalResume.pdf"
              target="_blank"
              className="btn-primary"
            >
              Resume
            </a>

            <a href="/contact" className="btn-secondary">
              Contact Me
            </a>
          </div>
        </div>

        <div className="about-image">
          <img src="..\..\src\assets\raj.jpg" alt="profile" />
        </div>
      </div>
    </section>
  );
}
