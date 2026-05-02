import PublicationsList from "../components/sections/PublicationsList";

export default function Publications() {
  return (
    <main className="container">
      <section className="page-header">
        <h1>Publications</h1>
        <p>
          A collection of my written work. Currently includes academic notes and
          cheatsheets, with future additions of formal publications and papers.
        </p>
      </section>

      <PublicationsList />
    </main>
  );
}
