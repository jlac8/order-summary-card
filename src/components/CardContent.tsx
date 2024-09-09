import OrderSummary from "./OrderSummary"
import PaymentPlan from "./PaymentPlan"
import NextAction from "./NextAction"

function CardContent() {
  return (
    <>
      <OrderSummary></OrderSummary>
      <PaymentPlan></PaymentPlan>
      <NextAction></NextAction>
    </>
  )
}

export default CardContent
