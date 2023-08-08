import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from "./components/button/button";

function App() {
    // const alertMessage = (message: string) => {
    //     alert(message)
    // }
const todolistTitle = "What to learn"
    const tasks = [
        {id:"1",title:"Html",isDone:true},
        {id:"2",title:"Css",isDone:true},
        {id:"3",title:"JS",isDone:false},
        {id:"4",title:"Pyton",isDone:false},
    ]
    return (
        <div className="App">
            <div>Hello</div>
            <h1>{todolistTitle}</h1>
            <ul>
                <li>
                    <span>{tasks[0].title}</span>
                    <input type="checkbox" checked={tasks[0].isDone}/>
                </li>
                <li>
                    <span>{tasks[1].title}</span>
                    <input type="checkbox" checked={tasks[1].isDone}/>
                </li>
                <li>
                    <span>{tasks[2].title}</span>
                    <input type="checkbox" checked={tasks[2].isDone}/>
                </li>
                <li>
                    <span>{tasks[3].title}</span>
                    <input type="checkbox" checked={tasks[3].isDone}/>
                </li>
            </ul>
        </div>
    );
}

export default App;
