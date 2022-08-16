export default function Card() {
  return (
    <article className="card">
      <img src="../../public/images/katie-zaferes.png" alt="katie zaferes"/>
      <div className="card__stats">
        <span className="card__stats-item star"></span>
        <p className="card__stats-item">5.0</p>
        <p className="card__stats-item gray">(6) • </p>
        <p className="card__stats-item gray">USA</p>
      </div>
      <p className="card__title">Life lessons with Katie Zaferes</p>
      <p className="card__price"><span className="card__price--bold">From $136</span> / person</p>
    </article>
  )
}