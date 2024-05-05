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
          selected: tasks.id === taskSelected.id? true : false
        })))
    }

    return (
        <div className={style.AppStyle}>
            <Form setTasks={setTasks} />
            <List
                tasks={tasks}
                selectTask={selectTask}
            />
            <Timer selected={selected}/>
        </div>
    );
}

export default App;



