import Item from './Item';
import style from './List.module.scss';
import { ITask } from '../../types/tasks';

interface Props {
    tasks: ITask[];
    selectTask: (taskSelected: ITask) => void; 
}

function List({ tasks, selectTask }: Props) { 
    return (
        <aside className={style.listTasks}>
            <h2>To Do List</h2>
            <ul>
                {tasks.map(item => (
                    <Item 
                        selectTask={selectTask}
                        key={item.id}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    );
}

export default List;

