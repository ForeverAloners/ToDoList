import React, {ChangeEvent, KeyboardEvent, useState} from "react";

type AddItemFormPropsType = {
    addItem: (title: string, todolistId: string) => void
}

export function AddItemForm(props: AddItemFormPropsType) {

    const [newTaskTitle, setNewTaskTitle] = useState("");
    const [error, setError] = useState<string | null>("");

    const onNewTittleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(e.currentTarget.value)
        const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
            setError(null);
            if (e.charCode === 13) {
                addTasks();
            }

            const addTasks = () => {
                if (newTaskTitle.trim() !== "") {
                    props.addItem(newTaskTitle.trim(), props.id);
                    setNewTaskTitle("");
                } else {
                    setError("Title is required")
                }
            }

            return <div>
                <input value={newTaskTitle}
                       onChange={onNewTittleChangeHandler}
                       onKeyPress={onKeyPressHandler}
                       className={error ? "error" : ''}
                />
                <button onClick={addTasks}>+</button>
                {error && <div className="error-message">{error}</div>}
            </div>
        }
    }
}