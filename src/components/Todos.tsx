import { useContext } from "react"
import { TodosContext } from "../context/TodosContext"

export const Todos = () => {
const {todos, toggle, remove} = useContext(TodosContext);
    return(
        <ul>
            {todos.map((t) => (
                <li key={t.id} style={{textDecoration: t.done ? "line-through" : "none"}}>
                    {t.text}
                    <button onClick={() => toggle(t.id)}>Toggle</button>
                    <button onClick={() => remove(t.id)}>Remove</button>
                </li>
            ))}
        </ul>
    )
}