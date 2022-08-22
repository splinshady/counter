import React, {useEffect} from 'react';
import Button from "./Button";
import style from './style.module.css';

type ControlPropsType = {
    setCount: (count: number) => void,
    count: number,
    maxValue: number,
    initialCount: number,
}

const Control: React.FC<ControlPropsType> = (props) => {

    const incrementCallback = () => {
        props.maxValue > props.count && props.setCount(props.count + 1)
    }

    const resetCallback = () => {
        props.setCount(props.initialCount)
    }


    return (
        <div className={style.control}>
            <Button name={'inc'} callback={incrementCallback}/>
            <Button name={'reset'} callback={resetCallback}/>
        </div>
    );
};

export default Control;