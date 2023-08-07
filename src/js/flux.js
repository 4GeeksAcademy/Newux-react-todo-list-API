// import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from "react/cjs/react.production.min";

import { InputToDo } from "./inputToDo";

import React, {useEffect, useState} from 'react';

export const dataFetch= (async) => {

    fetch('https://playground.4geeks.com/apis/fake/todos/user/alesanchezr', {
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

}

export const dataAdd= (e) => {
    if(e.key = enter && newItem != "") {
        addTodo = todo.concat([{label: newItem, done: false}]);
        setTodo(addTodo);
        updateFetch(addTodo);
        setNewItem("")
    }
}

export const dataDelete= () => {
    let taskDelete = [{"label":"", "done": false}]
    setTodo(taskDelete);
    updateFetch(taskDelete);

}