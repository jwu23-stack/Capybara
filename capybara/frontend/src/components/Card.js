import React from 'react';
// Props: title, subtitle (optional), location (optional), image, onClick 
export function Card(props) {
    return (
        // A card populated with the fields above
        // TODO: Make the cards go somewhere onClick
        // TOOO: handle alt text for images
        // TODO: Add pin image to the left of the location text
        <div className="col">        
            <div className="card">
                <img src={props.image} className="card-img-top" alt="default alt text"></img>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    { props.subtitle && <p className="card-text">{props.subtitle}</p> }
                    { props.location && 
                        <p className="card-text">
                            <small className="text-body-secondary">{props.location}</small> 
                        </p>
                    }
                </div>
            </div>
        </div>
    )
}