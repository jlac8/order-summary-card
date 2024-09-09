function OrderSummary() {
  const order: string = 'You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!'

  return (
    <div className="card__order-summary">
      <h1 className="card__title">Order Summary</h1>
      <p className="card__order-description">{order}</p>
    </div>
  )
}

export default OrderSummary
