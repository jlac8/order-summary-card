import OrderSummary from "./OrderSummary"
import PaymentPlan from "./Plan"
import Buttons from "./Buttons"

function CardContent() {
  return (
    <div className="card__content">
      <OrderSummary></OrderSummary>
      <PaymentPlan></PaymentPlan>
      <Buttons></Buttons>
    </div>
  )
}

export default CardContent
