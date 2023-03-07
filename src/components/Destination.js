import "./Destination.css"
import DestinationData from "./DestinationData";
import mountain1 from "../assests/1.jpg";
import mountain2 from "../assests/img1.jpg";
import mountain3 from "../assests/3.jpg";
import mountain4 from "../assests/4.jpg";
const Destination = () => {
    return(
        <div className="destination">
            <h1>Popular Destination</h1>
            <p>Tours give you the opportunity to see a lot, within a time frame.</p>

            <DestinationData className="first-des"
            heading="Taal Volcano, Batangas"
            text="one of the most iconic views in Luzon, Mt. Taal boasts a
            volcano inside a lake inside an island. If your fancy a closer
            look, the hike up to the crate is a mere 45 minutes, and is easy
            enough for beginners. Guides will assist you most of the way, and you'll
            see the peculiar environment found on an active volcano, including volcanic
            rocks and stream vents.The hike can be dusty and hot, so plan for an early
            morning trip, and then unwind with some bulalo before heading back home!."
            img1={mountain1}
            img2={mountain2}
            />

            <DestinationData className="first-des-reverse"
                heading="Mt. Daguldul, Batangas"
                text="If you are looking for a hikie that's a little more challenging but
                test data test data test data test data test data test data test data test data
                test data test data test data test data test data test data test data test data
                test data test data test data test data test data test data test data test data
                test data test data test data test data test data test data test data test data."
                img1={mountain3}
                img2={mountain4}
            />
        </div>
    )
}

export default Destination