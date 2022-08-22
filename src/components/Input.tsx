import React, {ChangeEvent, ChangeEventHandler} from 'react';
import style from './style.module.css';

type InputPropsType = {
    name: string,
    callback: (value: number) => void,
    value: number,
}

const Input: React.FC<InputPropsType> = (props) => {

    const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.callback(JSON.parse(event.target.value))
    }

    return (
        <label className={style.input}>
            {props.name}:
            <input onChange={changeHandler} type="number" value={props.value}/>
        </label>
    );
};

export default Input;