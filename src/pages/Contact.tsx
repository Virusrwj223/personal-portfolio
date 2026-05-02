import ContactDetail from "../components/sections/ContactDetail";

export default function Contact() {
  return (
    <main className="container">
      <section className="page-header">
        <h1>Contact</h1>
        <p>
          Feel free to reach out for opportunities, collaborations, or technical
          discussions.
        </p>
      </section>

      <ContactDetail />
    </main>
  );
}
