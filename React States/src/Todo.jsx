import { useState } from "react";
import "./App.css";
export default function Todo(){
// Creating An State Variable
let[todo,settodo] = useState([]);
function updateTodo(event){
    event.preventDefault();
    todo.push(`${event.target.todo.value}`);
    settodo([...todo]);
}
return(<><form onSubmit={updateTodo}>
    <input name="todo" class="form-control" type="text" placeholder="Default input" aria-label="default input example"></input>

    <button>Submit</button>
</form>
<br></br><br></br>

<div>
    <h1>All To Do</h1>
    <ul>
       {todo.map((item) => {
    return <><li key={item}>{item}&nbsp;&nbsp;<button>Delete!</button></li></>;
     })}
    </ul>
</div>
</>)
}