import React, {useState} from 'react';
import Display from "./Display";
import Control from "./Control";
import style from "./style.module.css";

const Counter = () => {
    const [count, setCount] = useState(0)
    const [maxValue, setMaxValue] = useState(5)

    return (
        <div className={style.counter}>
            <Display count={count} maxValue={maxValue}/>
            <Control setCount={setCount}
                     count={count}
                     maxValue={maxValue}
            />
        </div>
    );
};

export default Counter;