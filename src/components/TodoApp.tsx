import { useState } from "react"
import { ITodoscontext, TodosContext } from "../context/TodosContext"
import { Todo } from "../models/Todo";
import { AddTodo } from "./AddTodo";
import { Todos } from "./Todos";

export const TodoApp = () => {
    const [todoState, setTodoState] = useState<ITodoscontext>({
        todos: [],
        add: () => { },
        remove: () => { },
        toggle: () => { }
    });
    todoState.toggle = (id: number) => {
        setTodoState({
            ...todoState,
            todos: todoState.todos.map((t) => {
                if (t.id === id) {
                    return {
                        ...t, done: !t.done
                    }
                } else {
                    return t;
                }
            }
            )
        })
    }
    todoState.remove = (id: number) => {
        setTodoState({
            ...todoState,
            todos: todoState.todos.filter((t) => t.id !== id)
        })
    }
    todoState.add = (text: string) => {
        setTodoState({
            ...todoState,
            todos: [...todoState.todos, new Todo(text)]
        })
    }
    return (
        <div>
            <h2>Todo App</h2>
            <TodosContext.Provider value={todoState}>
                <AddTodo />
                <Todos/>
            </TodosContext.Provider>
        </div>
    )
}