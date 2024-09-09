import CardImage from "./CardImage"
import CardContent from "./CardContent"

function Card() {
  return (
    <article className="card">
      <CardImage></CardImage>
      <CardContent></CardContent>
    </article>
  )
}

export default Card

