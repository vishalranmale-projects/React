import { useState } from "react"
export default function LudoBoard(){
    let arr = [0,0,0,0]
    let[gameCounts,setgameCounts] = useState(arr)
    function init(event){
        if(event.target.className == "Blue"){
         gameCounts[0]+=1;
         setgameCounts([...gameCounts]);
        }
        else if(event.target.className == "Yellow"){
           gameCounts[1]+=1;
          setgameCounts([...gameCounts]);
        }
        else if(event.target.className == "Green"){
           gameCounts[2]+=1;
           setgameCounts([...gameCounts]);
        }
        else if(event.target.className == "Red"){
          gameCounts[3]+=1;
          setgameCounts([...gameCounts]);
        }
        else{
          setgameCounts([0,0,0,0 ])
        }
    }
    
    return(<>Game Begins!
      <div>
        <h4>Blue Moves:{gameCounts[0]}</h4>
        <button style={{backgroundColor:"blue"}} className="Blue" onClick={init} >+1</button>
         <h4>Yellow Moves:{gameCounts[1]}</h4>
        <button style={{backgroundColor:"yellow"}} className="Yellow" onClick={init}>+1</button>
         <h4>Green Moves:{gameCounts[2]}</h4>
        <button style={{backgroundColor:"green"}} className="Green" onClick={init}>+1</button>
         <h4>Red Moves:{gameCounts[3]}</h4>
        <button style={{backgroundColor:"red"}} className="Red" onClick={init}>+1</button>
      </div>
      <br></br>
      <br></br>
      <button className="Clear" onClick={init}>CLear Alll</button>
    
    </>)
 }