import React, {useEffect, useState} from 'react';
import Display from "./Display";
import Control from "./Control";
import style from "./style.module.css";

type CounterPropsType = {}

const Counter: React.FC<CounterPropsType> = (props) => {

    return (
        <div className={style.counter}>
            <Display />
            <Control />
        </div>
    );
};

export default Counter;