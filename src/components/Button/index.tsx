import React from 'react';
import style from './Button.module.scss';

interface Props {
    text?: string;
    type?: "button" | "submit" | "reset" | undefined, onClick?: () => void;
    children?: React.ReactNode;
}

function Button({ onClick, type = "button", text, children }: Props) {
    return (
        <button onClick={onClick} type={type} className={style.button}>
            {text}
            {children}
        </button>
    );
}

export default Button;
