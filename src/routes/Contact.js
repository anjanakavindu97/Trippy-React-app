import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import ContactImg from '../assests/2.jpg'
import Footer from "../components/Footer";

function Contact() {
    return (
      <>
      <Navbar />
      <Hero 
      cName="hero-mid"
      heroImg={ContactImg}
      title="Contact Us"
      btnClass="hide"
      />
          <Footer/>
      </>
    );
  }
  
  export default Contact;