import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
// import "./App.css";
export default function Todo(){
// Creating An State Variable
let[todo,settodo] = useState([{task:"Woke-Up",key:uuidv4(),mark:false}]);

function updateTodo(event){
    event.preventDefault();
    todo.push({
        task:event.target.todo.value,
        key:uuidv4()
    });
    settodo([...todo]);
    event.target.todo.value="";
}
function EraseAll(){
settodo([]);
}
function deleteTodo(id){
 let newArr = todo.filter((item)=>{
return item.key!=id;
  })
  settodo(newArr);
}
function updateAll(){
    todo.map((item)=>{
        return item.task=item.task.toLocaleUpperCase();
    })
    settodo([...todo]);
}
function updateOne(id){
todo.map((item)=>{
    if(item.key == id){
        console.log("Okay")
      return item.task=item.task.toLocaleUpperCase();
    }
})
  settodo([...todo]);
}
function markOne(id){
   todo.map((item)=>{
    if(item.key==id){
        return item.mark = true;
    }
   })
   settodo([...todo]);
}
function markAll(id){
   todo.map((item)=>{
        return item.mark = true;
   })
   settodo([...todo]);
}

return(<>
    <form onSubmit={updateTodo}>
    <input name="todo" className="form-control" type="text" placeholder="Default input" aria-label="default input example"></input>
    <button>Submit</button>
    </form>
<br></br><br></br>

<div>
    <h1>All To Do</h1>
    <ul>
       {todo.map((item) => {
    return <>
    <li key={item.key} style={{textDecoration:item.mark?"line-through":"null"}} >
                {item.task}&nbsp;&nbsp;<button onClick={()=>{deleteTodo(item.key)}}>Delete!</button>  <button onClick={()=>{updateOne(item.key)}}>upperCaseOne</button><button onClick={()=>{markOne(item.key)}}>Mark As Done!</button></li>
                </>;
     })}
    </ul>
    <button onClick={EraseAll}>Delete All Todo</button>
    <button onClick={updateAll}>upperCaseAll</button>
     <button onClick={markAll}>Mark All</button>
</div>
</>)
}