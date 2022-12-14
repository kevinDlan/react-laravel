import React,{useState} from "react";
import AddTodoForm from "./AddTodoForm";


const Index = ()=>
{
    const [todos, setTodos] = useState(
        [{
            id:1,
            todo:'Buy a Milk',
            status:'created'
        },
        {
            id:2,
            todo:'Buy a Flour',
            status:'created'
        },
        {
            id:3,
            todo:'Make a Bread',
            status:'created'
        }
    ]
    )

    const addTodo = (todo) =>
    {
        setTodos (prev => {
            return [...prev,todo]
        })
    }

    const listItem = todos.map(todo => {
        return (
            <li className="list-group-item" key={todo.id}>
                {todo.todo} -{" "}
                <span className="badge rounded-pill text-bg-info">
                    {todo.status}
                </span>
            </li>
        );
    })
    return (
        <div className="text-center">
            <h1>Welcome To Todo App</h1>
            <h2>{todos.length} To Make</h2>
            <div className="col-md-6 mx-auto">
                <ul className="list-group">{listItem}</ul>
            </div>
            <AddTodoForm addTodo={addTodo}/>
        </div>
    );
}

export default Index;