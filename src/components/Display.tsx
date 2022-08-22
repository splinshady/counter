import React from 'react';
import style from './style.module.css';
import {Simulate} from "react-dom/test-utils";

type DisplayPropsType = {
    count: number,
    maxValue: number,
    error: boolean,
    settingActive: boolean,
}

const Display: React.FC<DisplayPropsType> = (props) => {
    let countColor = props.count >= props.maxValue ? style.max_value : '';


    return (
        <div className={style.display}>
            {
                props.settingActive ?
                    props.error ?
                        <span className={style.error}>Incorrect value!</span>
                        : <span className={style.active_message}>Enter values and press "set"</span>
                    : <span className={countColor}>{props.count}</span>
            }
        </div>
    );
};

export default Display;