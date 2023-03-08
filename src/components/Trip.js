import "./Trip.css"
import TripData from "./TripData";
import Img1 from "../assests/5.jpg"
import Img2 from "../assests/6.jpg"
import Img3 from "../assests/8.jpg"

function Trip() {
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique
            destinations using Google Maps</p>
            <div className="tripcard">
                <TripData
                image={Img1}
                heading="Trip in Indonesia"
                text="Indonesia, officially the Republic of Indonesia,
                is a country in Southeast Asia and Oceania between indian
                and Pacific oceans. Indonesia, officially the Republic of Indonesia,
                is a country in Southeast Asia and Oceania between indian
                and Pacific oceans"
                />
                <TripData
                    image={Img2}
                    heading="Trip in Malayasiya"
                    text="Indonesia, officially the Republic of Indonesia,
                is a country in Southeast Asia and Oceania between indian
                and Pacific oceans. Indonesia, officially the Republic of Indonesia,
                is a country in Southeast Asia and Oceania between indian
                and Pacific oceans"
                />
                <TripData
                    image={Img3}
                    heading="Trip in France"
                    text="Indonesia, officially the Republic of Indonesia,
                is a country in Southeast Asia and Oceania between indian
                and Pacific oceans. Indonesia, officially the Republic of Indonesia,
                is a country in Southeast Asia and Oceania between indian
                and Pacific oceans"
                />
            </div>
        </div>
    );
}

export default Trip