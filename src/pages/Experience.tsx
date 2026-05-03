import ExperienceCard from "../components/sections/ExperienceCard";
import PublicationsList from "../components/sections/PublicationsList";
import SkillsTable from "../components/sections/SkillsTable";

import astar from "../assets/astar_testimonial and cert.pdf";
import smartkarma from "../assets/SK-general.pdf";
import oma from "../assets/oma.png";
import bare from "../assets/bare.png";

export default function Experience() {
  return (
    <main className="experience-page">
      <aside className="experience-nav">
        <a href="#work">Work</a>
        <a href="#academia">Academia</a>
        <a href="#projects">Projects</a>
        <a href="#academics">Academics</a>
        <a href="#skills">Skills</a>
      </aside>

      <div className="container experience-content">
        <section className="page-header">
          <h1>Experience</h1>
          <p>
            Here are my works developed with guidance from wonderfull colleagues
            and teams.
          </p>
        </section>

        <section id="work" className="experience-section">
          <h2>Work Experience</h2>

          <ExperienceCard
            title="A*STAR - Agency for Science, Technology and Research"
            subtitle="AI Research Intern • Jan - July 2026"
            description={[
              "I have developed an internal Explainable AI (XAI) library value-added with temporal attributions for the case of demand forecasting under the supervision of Dr Liu Ning",
            ]}
            // imageSrc="..\..\assets\AStar.png"
            imageAlt="Work experience"
            buttonText="Testimonial"
            buttonLink={astar}
            buttonPosition="left"
          />

          <ExperienceCard
            title="Smartkarma"
            subtitle="Data Analyst Intern • Jan - July 2023"
            description={[
              "Developed an internal data pipeline for the collection of finanical data from public unstructured sources",
            ]}
            // imageSrc="..\..\assets\AStar.png"
            imageAlt="Work experience"
            buttonText="Testimonial"
            buttonLink={smartkarma}
            buttonPosition="left"
          />
        </section>

        <section id="academia" className="experience-section">
          <h2>Academia</h2>

          <ExperienceCard
            title="SL to ACSL translator"
            subtitle="PL Research Assistant • Dec 2025 - Jan 2026"
            description={[
              "I have developed an open-source translator that translates Specification Language (SL) to ACSL for Frama-C based on the white paper and supervision of Prof. Chin Wei Ngan",
              "SL promises a more expressive manner for programmers to verify C code using ideas of formal contracts with verification done using corresponding ACSL on Frama-C ",
            ]}
          />

          <ExperienceCard
            title="CS2107 Introduction to Information Security"
            subtitle="TA • AY25/26 S1, S2"
            description={["Led tutelage for 40 students"]}
          />

          <ExperienceCard
            title="CP2106 Independent Software Development Project (Orbital)"
            subtitle="TA • AY24/25, AY25/26"
            description={[
              "Led tutelage for 14 teams by guiding projects to successful completion",
            ]}
          />
        </section>

        <section id="projects" className="experience-section">
          <h2>Projects</h2>

          <ExperienceCard
            title="Oma"
            subtitle="Backend, Quality Assurance, DevOps, MlOps"
            description={[
              "A Machine-Learning enabled mobile app to reccommend hidden gems of food places in Singapore",
            ]}
            imageSrc={oma}
            imageAlt="Project preview"
            buttonText="View Project"
            buttonLink="https://omagator-backend.vercel.app/"
            buttonPosition="left"
          />

          <ExperienceCard
            title="BARE"
            subtitle="Project Lead"
            description={[
              "Won a hackathon with a project that facilitates rentals over the blockchain",
            ]}
            imageSrc={bare}
            imageAlt="Project preview"
            buttonText="View Project"
            buttonLink="https://bar-e.onrender.com/"
            buttonPosition="left"
          />
        </section>

        <section id="academics" className="experience-section">
          <h2>Academics</h2>
          <PublicationsList />
        </section>

        <section id="skills" className="experience-section">
          <h2>Skills</h2>
          <SkillsTable />
        </section>
      </div>
    </main>
  );
}
