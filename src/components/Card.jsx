export default function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <article className="card">
      {badgeText && <div className="card__badge">{badgeText}</div>}
      <img src={`../../public/images/${props.coverImg}`} alt="katie zaferes"/>
      <div className="card__stats">
        <span className="card__stats-item star"></span>
        <p className="card__stats-item">{props.stats.rating}</p>
        <p className="card__stats-item gray">({props.stats.reviewCount}) • </p>
        <p className="card__stats-item gray">{props.location}</p>
      </div>
      <p className="card__title">{props.title}</p>
      <p className="card__price"><span className="card__price--bold">From {props.price}</span> / person</p>
    </article>
  )
}