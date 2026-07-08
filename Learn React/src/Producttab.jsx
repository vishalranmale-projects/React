import "./Producttab.css"
import Product from "./Product";

function Producttab(){
    return(<div ><h1 className="Outer">Blockbustor Deals On Computer Accessories ! Shop Now</h1>
    <div className="Producttab">
<Product Title="Logitech MX Master" Features={["8000 DPI","5 Programmable Buttons"]} newPrice={8999} oldPrice={12495}/>
<Product Title="Apple Pencil (2nd Gen)" Features={["Intuitive Touch Surface","Designed for iPad Pro"]}  newPrice={9199} oldPrice={11900}/>
<Product Title="Zebronics" Features={["Designed For ipad Pro","Intuitive Touch Surface"]}  newPrice={899} oldPrice={1599}/>
<Product Title="Petronics Toad" Features={["Wireless Mouse 2.4GHz","Optical Orientation"]}  newPrice={278} oldPrice={599}/>


</div></div>)
    
}

export default Producttab;