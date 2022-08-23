import React, {useEffect, useState} from 'react';
import Display from "./Display";
import Control from "./Control";
import style from "./style.module.css";

type CounterPropsType = {
    count: number,
    maxValue: number,
    setCount: (count: number) => void,
    initialCount: number,
    error: boolean,
    settingActive: boolean,
}

const Counter: React.FC<CounterPropsType> = (props) => {

    return (
        <div className={style.counter}>
            <Display count={props.count}
                     maxValue={props.maxValue}
                     error={props.error}
                     settingActive={props.settingActive}
            />
            <Control setCount={props.setCount}
                     count={props.count}
                     maxValue={props.maxValue}
                     initialCount={props.initialCount}
                     settingActive={props.settingActive}
            />
        </div>
    );
};

export default Counter;