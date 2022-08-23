import React, {ChangeEvent, ChangeEventHandler} from 'react';
import style from './style.module.css';

type InputPropsType = {
    name: string,
    callback: (value: number) => void,
    value: number,
    error: boolean,
}

const Input: React.FC<InputPropsType> = (props) => {

    const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.callback(JSON.parse(event.target.value))
    }
    const classes = props.error ? style.input_red: ''

    return (
        <label className={style.input}>
            {props.name}:
            <input onChange={changeHandler}
                   className={classes}
                   type="number"
                   value={props.value}
            />
        </label>
    );
};

export default Input;