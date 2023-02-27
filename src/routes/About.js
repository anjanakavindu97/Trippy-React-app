import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import AboutImg from '../assests/night.jpg'

function About() {
    return (
      <>
      <Navbar />
      <Hero 
      cName="hero-mid"
      heroImg={AboutImg}
      title="Aboute"
      btnClass="hide"/>
      </>
    );
  }
  
  export default About;