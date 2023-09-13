import React, {ChangeEvent} from "react";
import {filterValuesType} from "./App";
import {AddItemForm} from "./AddItemForm";
import {EditableSpan} from "./EditableSpan";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import {Button, Checkbox} from "@mui/material";
import {CheckBox} from "@mui/icons-material";

export type TasksType = {
    id: string
    title: string
    isDone: boolean
}
type PropsType = {
    id: string
    title: string
    tasks: Array<TasksType>
    removeTask: (id: string, todolistId: string) => void
    changeFilter: (value: filterValuesType, todolistId: string) => void
    addTasks: (title: string, todolistId: string) => void
    changeTaskStatus: (taskId: string, isDone: boolean, todolistId: string) => void
    changeTaskTitle: (taskId: string, newValue:string, todolistId: string) => void
    filter: filterValuesType
    removeTodolist: (todolistId: string) => void
    changeTodolistTitle: (id:string, newTitle: string) => void
}

export function Todolist(props: PropsType) {

    const onAllClickHandler = () => props.changeFilter("all", props.id);
    const onActiveClickHandler = () => props.changeFilter("active", props.id);
    const onCompletedClickHandler = () => props.changeFilter("completed", props.id);

    const removeTodolist = () => {
        props.removeTodolist(props.id);
    }
    const changeTodolistTitle = (newTitle:string) => {
        props.changeTodolistTitle(props.id, newTitle);
    }
    const addTasks = (title: string) => {
        props.addTasks(title,props.id);
    }

    return (
        <div>
            <h3> <EditableSpan title={props.title} onChange={changeTodolistTitle}/>
                </h3>
            <IconButton onClick={removeTodolist}> <DeleteIcon /> </IconButton>
            <AddItemForm  addItem={addTasks}/>
            <div>
                {
                    props.tasks.map(t => {
                        const onRemoveHandler = () => {
                            props.removeTask(t.id, props.id)
                        }
                        const onChangeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
                            props.changeTaskStatus(t.id, e.currentTarget.checked, props.id);

                        }
                        const onChangeTitleHandler = (NewValue:string) => {
                            props.changeTaskTitle(t.id, NewValue, props.id);

                        }
                        return <div key={t.id} className={t.isDone ? "is-Done" : ""}>
                            <Checkbox onChange={onChangeStatusHandler} checked={t.isDone}/>
                            <EditableSpan title={t.title} onChange={onChangeTitleHandler}/>
                            <IconButton onClick={onRemoveHandler}> <DeleteIcon /> </IconButton>
                        </div>
                    })
                }
            </div>
            <div>
                <Button variant={props.filter === "all" ? "contained" : "text"}    onClick={onAllClickHandler}>All
                </Button>
                <Button color={"success"} variant={props.filter === "active" ? "contained"  : "text"}
                        onClick={onActiveClickHandler}>Active
                </Button>
                <Button color={"secondary"} variant={props.filter === "completed" ? "contained"  : "text"}
                        onClick={onCompletedClickHandler}>Completed
                </Button>
            </div>
        </div>
    )
}
