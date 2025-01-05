import AboutMe from "../components/AboutMe";
import Companies from "../components/Companies";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Projects from "../components/Projects";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div>
      <Header/>
      <AboutMe />
      <Companies/>
      <Testimonials/>
      <Stats/>
      <Projects />
      <Footer />
    </div>
  );
};

export default Home;