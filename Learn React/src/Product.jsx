import "./Product.css"
import Price from "./Price"
export default function Product({Title,Features,newPrice,oldPrice}){
    
    Features = Features.map((feature)=><p>{feature}</p>)
    return(<div className="Product">
          <h3>{Title}</h3>
          <ul className="Features">{Features}</ul>
          <Price oldPrice={oldPrice}   newPrice={newPrice}/>
    </div>)
}