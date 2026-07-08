
import "./Price.css"

export default function Price({oldPrice,newPrice}){
return(<h3 className="Price"><span>{oldPrice}</span>&nbsp;&nbsp;&nbsp;{newPrice}</h3>)
}