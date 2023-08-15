import React from 'react';
import './App.css';
import { TasksType, Todolist} from "./Todolist";

function App() {

    let tasks1:Array<TasksType> = [
        {id: 1, title:"Css", isDone: true},
        {id: 2, title:"JS", isDone: true},
        {id: 3, title:"React", isDone: false}
    ]
    let tasks2 = [
        {id: 1, title:"Terminator", isDone: true},
        {id: 2, title:"Wolf", isDone: true},
        {id: 3, title:"Transformer", isDone: false}
    ]
    return (
        <div className="App">
            <Todolist title="What to learn" tasks={tasks1}/>
            <Todolist title="Movies" tasks={tasks2}/>
        </div>
    );
}

export default App;
