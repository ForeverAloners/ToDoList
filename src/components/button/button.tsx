import React from 'react';

type ButtonPropsType = {
    name: string
    age: number
    onClick:(message: string) => void
}
export const Button = (props: ButtonPropsType) => {
    return (
        <div>
            <button onClick={()=> props.onClick("Error")}>{props.name}</button>
            <span>{props.age}</span>
        </div>
    );
};

