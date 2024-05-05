import React, { useState } from 'react';
import Button from '../Button';
import style from './Form.module.scss';
import { ITask } from '../../types/tasks';
import {v4 as uuidv4} from 'uuid';

interface Props {
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}

function Form({ setTasks }: Props) {
    const [formData, setFormData] = useState({
        task: "",
        time: "00:00"
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const addTask = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setTasks(oldTasks => 
            [...oldTasks,
                { 
                    task: formData.task,
                    time: formData.time,
                    selected: false,
                    completed: false,
                    id: uuidv4()
                }
            ]
        );
        setFormData({ task: "", time: "00:00" }); 
    };

    return (
        <form className={style.newTask} onSubmit={addTask}>
            <div className={style.inputContainer}>
                <label htmlFor="task">
                    Add a new task
                </label>
                <input
                    type="text"
                    name="task"
                    id="task"
                    value={formData.task}
                    onChange={handleInputChange}
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
                    value={formData.time}
                    onChange={handleInputChange}
                    id="time"
                    min="00:00:00"
                    max="23:59:00"
                    required
                />
            </div>
            <Button type='submit' text="Add" />
        </form>
    )
}

export default Form;
