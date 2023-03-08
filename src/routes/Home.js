import Destination from '../components/Destination';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import HomeImg from '../assests/12.jpg'
import Trip from "../components/Trip";

function Home() {
  return (
    <>
    <Navbar />
      <Hero 
      cName="hero"
      heroImg={HomeImg}
      title="Your Journy Your Story"
      text="Choose Your Favourite Destination"
      buttonText="Travel Plan"
      url="/"
      btnClass="show"/>
      <Destination/>
      <Trip/>
    </>
  );
}

export default Home;