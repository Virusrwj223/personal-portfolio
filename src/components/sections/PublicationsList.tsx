type PublicationItem = {
  title: string;
  description: string;
  type: "notes" | "cheatsheet" | "paper";
  link: string;
};

const publications: PublicationItem[] = [
  {
    title: "CS4215 Programming Language Implementation",
    description:
      "Learnt the development of key aspects in programming languages including parsing, desugaring, typeing, evaluation",
    type: "notes",
    link: "https://github.com/Virusrwj223/Cheatsheet-And-Notes/tree/main/CS4215",
  },
  {
    title: "CS4211 Formal Verification",
    description: "Learnt model checking through Z-specification and PAT",
    type: "cheatsheet",
    link: "https://github.com/Virusrwj223/Cheatsheet-And-Notes/tree/main/CS4211",
  },
  {
    title: "CS3235 Computer Security",
    description: "Learnt memory safety and cryptography in details",
    type: "notes",
    link: "https://github.com/Virusrwj223/Cheatsheet-And-Notes/tree/main/CS3235",
  },
  {
    title: "CS2104 Programming Language Concepts",
    description:
      "Overview of the development of various programming languages concepts",
    type: "cheatsheet",
    link: "https://github.com/Virusrwj223/Cheatsheet-And-Notes/tree/main/CS2104",
  },
  {
    title: "CS2107 Security Notes",
    description: "Overview of cryptograpy and practical threats",
    type: "cheatsheet",
    link: "https://github.com/Virusrwj223/Cheatsheet-And-Notes/tree/main/CS2107",
  },
];

export default function PublicationsList() {
  return (
    <div className="publications-list">
      {publications.map((pub) => (
        <article className="publication-card" key={pub.title}>
          <div className="publication-content">
            <h3>{pub.title}</h3>
            <p>{pub.description}</p>

            <div className="publication-meta">
              <span className={`publication-tag ${pub.type}`}>{pub.type}</span>
            </div>
          </div>

          <a href={pub.link} target="_blank" className="publication-link">
            View
          </a>
        </article>
      ))}
    </div>
  );
}
