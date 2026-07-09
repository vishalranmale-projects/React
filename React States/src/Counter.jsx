import {useState} from "react";
function Counter(){

    let[count,setCount] = useState(0);
   async function  increaseCount(){
       setCount(count=count+1);
       setCount(count=count+1);
    }
    return(<><h1>Count:{count}</h1>
        <button onClick={increaseCount}>Increase Count!</button></>
    )
}

export default Counter;