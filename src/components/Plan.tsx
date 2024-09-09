function Plan() {
  const plan = 'Annual'
  const price = 59.99

  return (
    <div className="card__plan">
      <div className="card__plan-type">
        <img className="card__plan-icon" src="src/assets/icon-music.svg" alt="Icon Music" />
        <div className="card__plan-info">
          <h2 className="card__plan-name">{plan} Plan</h2>
          <p className="card__plan-price">${price}/year</p>
        </div>
      </div>
      <a className="card__plan-change" href="#">Change</a>
    </div>
  )
}

export default Plan
