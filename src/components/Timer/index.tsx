import Button from '../Button';
import Clock from './Clock';
import style from './Timer.module.scss';


function Timer(){
    return(
        <div className={style.timer}>
            <p className={style.title}>Choose a card and start the timer</p>
            <div className='clockWrapper'>
                <Clock/>
            </div>
            <Button>
                Start
            </Button>
        </div>
    )
}

export default Timer;