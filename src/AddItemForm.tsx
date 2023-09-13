import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {Button, TextField} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import {ControlPoint} from "@mui/icons-material";

type AddItemFormPropsType = {
    addItem: (title: string, ) => void
}

export function AddItemForm(props: AddItemFormPropsType) {

    const [newTaskTitle, setNewTaskTitle] = useState("");
    const [error, setError] = useState<string | null>("");

    const onNewTittleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(e.currentTarget.value)
    }
        const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
            setError(null);
            if (e.charCode === 13) {
                addTasks();
            }
        }
            const addTasks = () => {
                if (newTaskTitle.trim() !== "") {
                    props.addItem(newTaskTitle.trim());
                    setNewTaskTitle("");
                } else {
                    setError("Title is required")
                }
            }

            return <div>
                <TextField value={newTaskTitle}
                           variant={"outlined"}
                           label={"Type Value"}
                       onChange={onNewTittleChangeHandler}
                       onKeyPress={onKeyPressHandler}
                       error={!!error}
                           helperText={error}
                />
                <IconButton onClick={addTasks}  color={"primary"}  >
                    <ControlPoint/>
                </IconButton>
            </div>
        }
