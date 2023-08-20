import React, {useState} from 'react';
import './App.css';
import {TasksType, Todolist} from "./Todolist";
import {v1} from "uuid";
export type filterValuesType = "all" | "completed" | "active";
function App() {
    let [tasks, setTasks] = useState<Array<TasksType>>([
        {id: v1(), title: "Css", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "React", isDone: false},
        {id: v1(), title: "Redux", isDone: false}
    ]);
    let [filter, setFilter] = useState<filterValuesType>("all");
    function removeTask(id: string) {
        let filteredTasks = tasks.filter(t => t.id !== id)
        setTasks(filteredTasks);
    }
    function addTasks(title: string) {
        let newTask = {id: v1(), title: title, isDone: false};
        let newTasks = [newTask, ...tasks];
        setTasks(newTasks);
    }

    function changeStatus(taskId: string, isDone: boolean) {
        let task = tasks.find ( t => t.id === taskId);
        if (task) {
            task.isDone = isDone;
        }
        setTasks([...tasks]);
    }

    function changeFilter(value: filterValuesType) {
        setFilter(value);
    }

    let tasksForTodolist = tasks;
    if (filter === "completed") {
        tasksForTodolist = tasks.filter(t => t.isDone === true);
    }
    if (filter === "active") {
        tasksForTodolist = tasks.filter(t => t.isDone === false);
    }

    return (
        <div className="App">
            <Todolist title="What to learn"
                      tasks={tasksForTodolist}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
                      addTasks={addTasks}
                      changeTaskStatus={changeStatus}
                      filter={filter}
            />
        </div>
    );
}

export default App;
