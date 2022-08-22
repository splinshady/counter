import React, {useEffect, useState} from 'react';
import Display from "./Display";
import Control from "./Control";
import style from "./style.module.css";

type CounterPropsType = {
    count: number,
    maxValue: number,
    setCount: (count: number) => void,
    initialCount: number,
}

const Counter: React.FC<CounterPropsType> = ({count, maxValue, setCount, initialCount}) => {

    return (
        <div className={style.counter}>
            <Display count={count} maxValue={maxValue}/>
            <Control setCount={setCount}
                     count={count}
                     maxValue={maxValue}
                     initialCount={initialCount}
            />
        </div>
    );
};

export default Counter;