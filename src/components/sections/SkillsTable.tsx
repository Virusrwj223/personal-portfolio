type SkillGroup = {
  title: string;
  items: string[];
};

const skillGroups: SkillGroup[] = [
  {
    title: "Programming Languages",
    items: [
      "Python",
      "Java",
      "TypeScript",
      "JavaScript",
      "C",
      "C++",
      "OCaml",
      "SQL",
    ],
  },
  {
    title: "Formal Methods",
    items: ["Process Analysis Toolkit (PAT)", "LEAN", "Frama-C"],
  },
  {
    title: "Frameworks & Build Tools",
    items: ["React", "Next.js", "Prisma", "Maven", "Menhir", "Dune"],
  },
  {
    title: "Machine Learning & Data",
    items: ["SHAP", "Nixtla", "Pandas", "NumPy", "Plotly", "Jupyter"],
  },
  {
    title: "Tools",
    items: ["Git", "Docker"],
  },
];

export default function SkillsTable() {
  return (
    <div className="skills-grid">
      {skillGroups.map((group) => (
        <article className="skills-card" key={group.title}>
          <h3>{group.title}</h3>

          <ul>
            {group.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
