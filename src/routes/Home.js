import Destination from '../components/Destination';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <>
    <Navbar />
      <Hero 
      cName="hero"
      heroImg="https://github.com/tech2etc/React-Trippy-Tour-Website-Template/blob/main/src/assets/12.jpg?raw=true"
      title="Your Journy Your Story"
      text="Choose Your Favourite Destination"
      buttonText="Travel Plan"
      url="/"
      btnClass="show"/>
      <Destination/>
    </>
  );
}

export default Home;