import React from "react";

function List(){
    const tasks =[{
        task: 'React',
        time:'01:30:00'
    },
    {
        task: 'TypeScript',
        time: '02:00:00'
    }
]
    return(
        <aside>
            <h2>To do list</h2>
            <ul>
                {tasks.map((item,index) =>(
                    <li key={index}>
                        <h3>{item.task}</h3>
                        <span>{item.time}</span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default List;