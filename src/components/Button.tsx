import React from 'react';
import style from './style.module.css';

type ButtonPropsType = {
    name: string,
    callback: () => void,
    disabled?: boolean,
}

const Button: React.FC<ButtonPropsType> = (props) => {
    let classes = props.disabled ? `${style.disabled} ${style.button}` : style.button
    return (
        <div>
            <button disabled={props.disabled}
                    onClick={props.callback}
                    className={classes}>{props.name}</button>
        </div>
    );
};

export default Button;