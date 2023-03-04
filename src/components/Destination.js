import mountain1 from "../assests/1.jpg"
import mountain2 from "../assests/img1.jpg"
import "./Destination.css"

const Destination = () => {
    return(
        <div className="destination">
            <h1>Popular Destination</h1>
            <p>Tours give you the opportunity to see a lot, within a time frame.</p>

            <div className="first-des">
                <div className="des-text">
                    <h2>Taal Volcano, Batangas</h2>
                    <p>
                        one of the most iconic views in Luzon, Mt. Taal boasts a
                        volcano inside a lake inside an island. If your fancy a closer
                        look, the hike up to the crate is a mere 45 minutes, and is easy
                        enough for beginners. Guides will assist you most of the way, and you'll
                        see the peculiar environment found on an active volcano, including volcanic
                        rocks and stream vents.The hike can be dusty and hot, so plan for an early
                        morning trip, and then unwind with some bulalo before heading back home!.
                    </p>
                </div>
                <div  className='image'>
                    <img alt="img" src={mountain1}/>
                    <img alt="img" src={mountain2}/>
                </div>
            </div>
        </div>
    )
}

export default Destination