import { FormEvent, useContext, useState } from "react"
import { TodosContext } from "../context/TodosContext";
import { Button } from "./Button";

export const AddTodo= ()=>{
    const [userInput, setUserInput] = useState("");
    const {add} = useContext(TodosContext);
    const handleSava = (e:FormEvent)=>{
        e.preventDefault()
        add(userInput);
        setUserInput("");
    };
    return(
        <form onSubmit={handleSava}>
            <input type="text" value={userInput} required onChange={(e)=>setUserInput(e.target.value)}/>
            <Button>Add</Button>
        </form>
    )
}
