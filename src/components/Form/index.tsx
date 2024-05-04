import React from "react";
import Button from "../Button";
import style from './Form.module.scss';

function Form() {
    return (
        <form className={style.newTask}>
            <div className={style.inputContainer}>
                <label htmlFor="task">
                    Add a new task
                </label>
                <input
                    type="text"
                    name="task"
                    id="task"
                    placeholder="Create a task"
                    required
                />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="time">
                    Time
                </label>
                <input
                    type="time"
                    step="1"
                    name="time"
                    id="time"
                    min="00:00:00"
                    max="23:59:00"
                    required
                />
            </div>
            <Button />
        </form>
    )
}


export default Form;