import Button from '../Button';
import Clock from './Clock';
import style from './Timer.module.scss';
import { timeToSeconds } from '../../common/utils/time';
import { ITask } from '../../types/tasks';
import {useEffect, useState} from 'react';

interface Props{
    selected: ITask | undefined
}

function Timer({selected}:Props) {
    const [time, setTime] = useState<number>();

    useEffect(() => {
     if(selected?.time){
        setTime(timeToSeconds(selected.time))
     }
    }, [selected])
    return (
        <div className={style.timer}>
            <p className={style.title}>Choose a card, start the timer</p>
            <div className={style.clockWrapper}>
                <Clock time={time}/>
            </div>
            <Button>
                Start
            </Button>
        </div>
    )
}


export default Timer;