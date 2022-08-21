import React from 'react';
import style from './style.module.css';

type ButtonPropsType = {
    name: string,
    callback: () => void,
}

const Button: React.FC<ButtonPropsType> = (props) => {
    return (
        <div>
            <button onClick={props.callback} className={style.button}>{props.name}</button>
        </div>
    );
};

export default Button;