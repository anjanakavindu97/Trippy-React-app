import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import AboutImg from '../assests/night.jpg'
import Footer from "../components/Footer";
import Aboutus from "../components/AboutUs";

function About() {
    return (
      <>
      <Navbar />
      <Hero 
      cName="hero-mid"
      heroImg={AboutImg}
      title="About"
      btnClass="hide"
      />
          <Aboutus/>
          <Footer/>
      </>
    );
  }
  
  export default About;