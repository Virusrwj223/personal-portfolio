type HobbyItem = {
  name: string;
  certificateLink?: string;
};

type HobbyGroup = {
  title: string;
  items: HobbyItem[];
};

const hobbyGroups: HobbyGroup[] = [
  {
    title: "Sports",
    items: [
      { name: "Taekwondo | First Dan" }, // replace with real link
      { name: "Marathon Runner | 21km PB: 2.20" },
      { name: "Gym" },
    ],
  },
  {
    title: "Logic",
    items: [{ name: "Chess" }, { name: "Hackathons" }],
  },
  {
    title: "Language",
    items: [{ name: "Chinese" }, { name: "Bengali" }],
  },
  {
    title: "Art",
    items: [
      { name: "Piano | ABRSM Grade 6" }, // replace with real link
    ],
  },
];

export default function HobbiesGrid() {
  return (
    <div className="hobbies-grid">
      {hobbyGroups.map((group) => (
        <article className="hobby-card" key={group.title}>
          <h3>{group.title}</h3>

          <ul>
            {group.items.map((item) => (
              <li key={item.name}>
                <span>{item.name}</span>

                {item.certificateLink && (
                  <a
                    href={item.certificateLink}
                    target="_blank"
                    className="hobby-cert"
                  >
                    Certificate
                  </a>
                )}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
