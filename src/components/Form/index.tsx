import React from "react";
import Button from "../Button";
import './style.scss';

function Form(){
        return (
            <form className="novaTarefa">
                <div className="inputContainer">
                    <label htmlFor="task">
                    What subject are you studying today?
                    </label>
                    <input
                        type="text"
                        name="task"
                        id="task"
                        placeholder="Create a task"
                        required 
                        />
                </div>
                <div className="inputContainer">
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