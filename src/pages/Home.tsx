import AboutMe from "../components/AboutMe";
import Companies from "../components/Companies";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Projects from "../components/Projects";
// import Experience from "../components/Experience";
// import Projects from "../components/Projects";
// import Contact from "../components/Contact";

const Home = () => {
  return (
    <div>
      <Header/>
      <AboutMe />
      <Companies/>
      <Projects />
      <Footer />
    </div>
  );
};

export default Home;