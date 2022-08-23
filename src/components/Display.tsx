import React from 'react';
import style from './style.module.css';

type DisplayPropsType = {
    count: number,
    maxValue: number,
    error: boolean,
}

const Display: React.FC<DisplayPropsType> = (props) => {
    let countColor = props.count >= props.maxValue ? style.max_value : '';


    return (
        <div className={style.display}>
            {props.error
                ? <span className={style.error}>Incorrect value!</span>
                : <span className={countColor}>{props.count}</span>
            }
        </div>
    );
};

export default Display;