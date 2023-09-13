import React, {ChangeEvent, useState} from "react";
import {TextField} from "@mui/material";

type EditableSpanPropsType = {
    title: string
    onChange: (Newvalue: string) => void
}

export function EditableSpan(props: EditableSpanPropsType) {
    let [editMode, seteditMode] = useState(false);
    let [title, setTitle] = useState("");
    const activeEditMode = () => {
        seteditMode(true);
        setTitle(props.title)
    }
    const activeViewMode = () => {
        seteditMode(false)
        props.onChange(title)
    }
    const onChangeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    return editMode
        ? <TextField value={title} onChange={onChangeTitleHandler} onBlur={activeViewMode} autoFocus/>
        : <span onDoubleClick={activeEditMode}>{props.title}</span>
}
