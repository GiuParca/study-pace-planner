import Button from '../Button';
import Clock from './Clock';
import style from './Timer.module.scss';
import { timeToSeconds } from '../../common/utils/time';
import { ITask } from '../../types/tasks';
import { useEffect, useState } from 'react';

interface Props {
    selected: ITask | undefined,
    completeTask: ()=> void
}

function Timer({ selected, completeTask }: Props) {
    const [time, setTime] = useState<number>();

    useEffect(() => {
        if (selected?.time) {
            setTime(timeToSeconds(selected.time))
        }
    }, [selected]);

    function regressive(counter: number = 0) {
        setTimeout(() =>{
            if(counter>0){
                setTime(counter-1);
                return regressive(counter-1)
            }
            completeTask();
        }, 1000)
    }

    return (
        <div className={style.timer}>
            <p className={style.title}>Select a card and start the timer</p>
            <div className={style.clockWrapper}>
                <Clock time={time} />
            </div>
            <Button onClick={() => regressive(time)}>
                Start
            </Button>
        </div>
    )
}


export default Timer;