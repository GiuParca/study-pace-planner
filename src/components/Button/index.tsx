import React from 'react';
import style from './Button.module.scss';

interface ButtonProps {
    text?: string;
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
    children?: React.ReactNode;
}

function Button({ onClick, type = "button", text, children }: ButtonProps) {
    return (
        <button onClick={onClick} type={type} className={style.botao}>
            {text}
            {children}
        </button>
    );
}

export default Button;
