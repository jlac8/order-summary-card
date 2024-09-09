function PaymentPlan() {
  const plan = 'Annual'
  const price = 59.99

  return (
    <>
      <img src="src/assets/icon-music.svg" alt="Icon Music" />
      <h2>{plan} Plan</h2>
      <p>${price}/year</p>
      <a href="#">Change</a>
    </>
  )
}

export default PaymentPlan
