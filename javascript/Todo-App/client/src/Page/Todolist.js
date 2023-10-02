import React, { useState, useEffect, } from "react";
import "./Todolist.css";
const initialfield = { todo: "" }
function ToDoApp() {
    const [TodoName, SetTodoName] = useState(initialfield);
    const [TodoList, SetTodoList] = useState([]);


    const handleSubmit = async (event) => {
        event.preventDefault();
        const { todo } = TodoName;
        try {
            //POST request to add a new todo
            await fetch('http://localhost:5000/AddTodo', {
                method: "POST",
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({ todo })
            })

            //Set the todo name to the default value
            SetTodoName(initialfield);

            document.getElementById("todo").value = "";
            // Get request to retieve the updated todo list
            const response = await fetch('http://localhost:5000/GetTodo')
            const data = await response.json();
            SetTodoList(data.data);
        } catch (err) {
            console.error(err.message);
        }



    }

    useEffect(() => {
        const resetTodoList = async () => {
            try {
                await fetch('http://localhost:5000/GetTodo', {
                    method: 'DELETE'
                });
                SetTodoList([]);
            } catch (err) {
                console.error(err.message);
            }
        };
        resetTodoList();
    }, []);
    return (
        <>
            {/* heading code */}
            <div>
                <h1 ><u>To Do List App</u></h1>

            </div>
            <div className="todo">

                <form onSubmit={handleSubmit}>

                    <label htmlFor="todo" className="label-style">Enter the Task</label>
                    <input className="input-style" type="text" id="todo" name="todo" placeholder="Add item here!" required value={TodoName.todo} onChange={(e) => SetTodoName({ ...TodoName, todo: e.target.value })} />
                    <button className="btn-style" type="submit">Add Task</button>
                </form>
            </div>
            <div>
                <ul className="lists">
                    {TodoList.map((database) => (
                        <li className="tasks" key={database.id}>
                            <span className="input-task">{database.todo}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}
export default ToDoApp;