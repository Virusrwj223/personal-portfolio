import HobbiesGrid from "../components/sections/HobbiesGrid";

export default function Hobbies() {
  return (
    <main className="container">
      <section className="page-header">
        <h1>Hobbies</h1>
        <p>
          Activities outside of academics that shape discipline, creativity, and
          problem-solving.
        </p>
      </section>

      <HobbiesGrid />
    </main>
  );
}
