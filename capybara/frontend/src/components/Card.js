import { Link } from 'react-router-dom';
// Props: title, subtitle (optional), location (optional), image, onClick 
export function Card({ goTo, title, subtitle, image, location, invisible}) {
    return (
        // A card populated with the fields above
        // TODO: Make the cards go somewhere onClick
        // TOOO: handle alt text for images
        // TODO: Add pin image to the left of the location text
        <div className="col m-3 mt-5 mb-5">  
            <Link className="link-underline link-underline-opacity-0" to={goTo}>
                <div className={`card ratio ratio-4x3 shadow ${invisible ? "invisible" : ""}`}>
                    <img src={image} className="card-img-top" alt="default alt text"></img>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        { subtitle && <p className="card-text">{subtitle}</p> }
                        { location && 
                            <p className="card-text">
                                <small className="text-body-secondary">{location}</small> 
                            </p>
                        }
                    </div>
                </div>
            </Link>
        </div>
    )
}