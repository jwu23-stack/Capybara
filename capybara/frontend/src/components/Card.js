// Props: title, subtitle (optional), location (optional), image
export function Card(props) {
    return (
        // A card populated with the fields above
        <div class="col">
            <div class="card">
                <img src={props.image} class="card-img-top" alt="test"></img> <!-- TODO: handle alt text -->
                <div class="card-body">
                    <h5 class="card-title">{props.title}</h5>
                    { props.subtitle && <p class="card-text">{props.subtitle}</p> }
                    { props.location && 
                        <p class="card-text">
                            <small class="text-body-secondary">{props.location}</small>  <!-- TODO: add pin image -->
                        </p>
                    }
                </div>
            </div>
        </div>
    )
}