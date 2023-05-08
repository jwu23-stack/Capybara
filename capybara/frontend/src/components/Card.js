import { Link } from 'react-router-dom';
// Props: title, subtitle (optional), location (optional), image, onClick
export function Card({ goTo, title, teacher, image, location, level, teacherExp }) {
  return (
    // A card populated with the fields above
    // TODO: Add pin image to the left of the location text
    <div className="col">
      <Link className="link-underline link-underline-opacity-0" to={goTo}>
        <div className="category-card border-0">
          <img src={image} className="card-img-top" alt={title}></img>
          <div className="category-card-body">
            <h5 className="category-card-title">{title}</h5>
            {level && <p className = "category-card-text">{level + " Level Class"}</p>}
            {teacher && <p className="category-card-text">{teacher + " | " + teacherExp}</p>}
            {location &&
              <p className="category-card-text">
                <small className="text-body-secondary">{location}</small>
              </p>
            }
          </div>
        </div>
      </Link>
    </div>
  )
}