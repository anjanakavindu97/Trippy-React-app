import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import ContactImg from '../assests/2.jpg'

function Contact() {
    return (
      <>
      <Navbar />
      <Hero 
      cName="hero-mid"
      heroImg={ContactImg}
      title="Contact Us"
      btnClass="hide"/>
      </>
    );
  }
  
  export default Contact;