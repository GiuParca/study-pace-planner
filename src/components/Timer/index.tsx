import Button from '../Button';
import Clock from './Clock';
import style from './Timer.module.scss';
import { timeToSeconds } from '../../common/utils/time';
import { ITask } from '../../types/tasks';
import {useState} from 'react';

interface Props{
    selected: ITask | undefined
}

function Timer({selected}:Props) {
    const [time, setTime] = useState<number>();
    if(selected?.time){
        setTime(timeToSeconds(selected.time));
    }
    return (
        <div className={style.timer}>
            <p className={style.title}>Choose a card, start the timer</p>
            Time:{time}
            <div className={style.clockWrapper}>
                <Clock />
            </div>
            <Button>
                Start
            </Button>
        </div>
    )
}


export default Timer;