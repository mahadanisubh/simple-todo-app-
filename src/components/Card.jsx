import { useState } from "react";
function Card({addTodo}){
    const [input, setInput] = useState("");

    const handleAdd = () =>{
       addTodo(input);
       setInput(""); 
    }

    return(
        <div>
        <input
    type="text"
    placeholder="Enter todo"
    value={input}
    onChange={(e) => setInput(e.target.value)}
  />
        <button onClick={handleAdd}>Add</button>
        </div>
    )
}

export default Card;