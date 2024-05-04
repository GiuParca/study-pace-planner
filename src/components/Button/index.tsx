import React from 'react';
import style from './Button.module.scss';

interface ButtonProps {
    text?: string;
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void,
    children?: React.ReactNode
}

function Button({ onClick, type, text, children }: ButtonProps) {
    return (
        <button onClick={onClick} type={type} className={style.botao}>
            {text}
            {children}
        </button>
    );
}

export default Button;
