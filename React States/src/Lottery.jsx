import { useState } from "react";

export default function Lottery(){
    let[lotteryDetails,setloteryDetails] = useState({value:0,isWin:false});

    function Start(){
     let num = Math.floor(Math.random() * 900) + 100;
     let Sum=0;
      for(let i=num;i>0;i=i/10){
         let LD = i%10;
         Sum = Sum+LD;
      }
      Sum = Math.floor(Sum);
      console.log(Sum)
     Sum==15?setloteryDetails({value:num,isWin:true}):setloteryDetails({value:num,isWin:false})
    }
    return(<>
    {lotteryDetails.isWin?<h1>Lottery 'Congratulation,you won!"</h1>:null}
    <h4>Lottery Ticket:{lotteryDetails.value}</h4>
    <button onClick={Start}>Get New Ticket!</button></>)
}