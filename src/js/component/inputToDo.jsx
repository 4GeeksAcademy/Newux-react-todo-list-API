import React from 'react'

import { useState, useEffect } from 'react';

//todo list component


export const InputToDo = () => {
    const [newItem, setNewItem] = useState(" ")
    const [todos, setTodos] = useState([]) //empty array for todos
    useEffect(() => {
        fetch('https://playground.4geeks.com/apis/fake/todos/user/newux')
            .then((result) => {
                return result.json
            })
            .then((data) => {
                setTodos(data) //taking useState and setting toDos equal to data from fetch
            })
    }, [])//only run when there is a change, empty array to fetch data from API
    useEffect(() => {
        fetch('https://playground.4geeks.com/apis/fake/todos/user/newux', {
            method: "PUT",
            body: JSON.stringify(todos),
            headers: {
                "Content-Type": "application/json"

            }
        })
            .then(resp => {
                console.log(resp.ok); // will be true if the response is successfull
                console.log(resp.status); // the status code = 200 or code = 400 etc.
                console.log(resp.text()); // will try return the exact result as string
                return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
            })
            .then(data => {
                //here is where your code should start after the fetch finishes
                console.log(data); //this will print on the console the exact object received from the server
            })
            .catch(error => {
                //error handling
                console.log(error);
            });
    }, [todos])//represents todo array that changes when new todo is added, which triggers useEffect which then makes the fetch request that puts info into API


    const handleSubmit = (e) => {
        // page will stop refreshing
        e.preventDefault()
        setTodos([...todos, { id: crypto.randomUUID(), title: newItem, completed: false }])

        //resets input field
        setNewItem("")


    }

    const deleteTodo = (id) => {
        setTodos(currentTodos => {
            return currentTodos.filter(todo => todo.id !== id)
        })
    }

    return (
        <div className="container-sm" id='inputSize'>
            <div className="d-flex justify-content-center">
                <h1 className="heading py-3">To Do List</h1>
            </div>
            <form className="task-form" onSubmit={handleSubmit} >
                <div className="task input-group mb-3">
                    <input
                        value={newItem}
                        onChange={e => setNewItem(e.target.value)}
                        type="text"
                        className="form-control"
                        placeholder="What needs to be done?"
                        aria-describedby="button-addon2"
                    />
                </div>
            </form>
            <ul className="list-group">
                {/* for each one of my todos i want to return an li */}
                {todos.map(todo => {
                    return (
                        <li key={todo.id} className="list-group-item d-flex justify-content-between">
                            {todo.title}
                            <button onClick={() => deleteTodo(todo.id)} className="btn">x</button>
                        </li>
                    )
                })}
            </ul>
            {/* <div>
                    {setTodos.length}
                </div> */}
        </div>
    )
}

//make new button to iniate the delete function
//implement function 