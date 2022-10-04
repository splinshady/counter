import React from 'react';
import style from './style.module.css';
import {useSelector} from "react-redux";
import {rootStateType} from "../state/store";
import {counterStateType} from "../reducers/counrer-reducer";

type DisplayPropsType = {}

const Display: React.FC<DisplayPropsType> = (props) => {
    const state = useSelector<rootStateType, counterStateType>(state => state.counter)

    let countColor = state.count >= state.maxValue ? style.max_value : '';

    return (
        <div className={style.display}>
            {state.error
                ? <span className={style.error}>Incorrect value!</span>
                : <span className={countColor}>{state.count}</span>
            }
        </div>
    );
};

export default Display;