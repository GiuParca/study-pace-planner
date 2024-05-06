import React, { useState } from 'react';
import Form from '../components/Form';
import List from '../components/List';
import Timer from '../components/Timer';
import style from './App.module.scss';
import { ITask } from '../types/tasks';

function App() {
    const [tasks, setTasks] = useState<ITask[]>([]);
    const [selected, setSelected] = useState<ITask>();

    function selectTask(taskSelected: ITask) {
        setSelected(taskSelected);
        setTasks(previousTasks => previousTasks.map(tasks => ({
            ...tasks,
            selected: tasks.id === taskSelected.id ? true : false
        })))
    }

    function completeTask() {
        if (selected) {
            setTasks(previousTasks => previousTasks.map(task => {
                if (task.id === selected.id) {
                    setSelected(undefined);
                    return {
                        ...task,
                        selected: false,
                        completed: true
                    }
                }
                return task;
            }))
        }
    }

    return (
        <div className={style.AppStyle}>
            <Form setTasks={setTasks} />
            <List
                tasks={tasks}
                selectTask={selectTask}
            />
            <Timer
                selected={selected}
                completeTask={completeTask} />
        </div>
    );
}

export default App;



