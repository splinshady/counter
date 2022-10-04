import React, {useEffect, useState} from 'react';
import Button from "./Button";
import style from './style.module.css';
import {useDispatch, useSelector} from "react-redux";
import {rootStateType} from "../state/store";
import {counterStateType, setCount, setIsSettingActive} from "../reducers/counrer-reducer";

type ControlPropsType = {}

const Control: React.FC<ControlPropsType> = (props) => {
    const dispatch = useDispatch()
    const state = useSelector<rootStateType, counterStateType>(state => state.counter)

    const [disabled, setDisabled] = useState(false)

    useEffect(() => {
        if (state.maxValue === state.count) {
            setDisabled(true)
        } else {
            setDisabled(false)
        }
    }, [state.count])

    const incrementCallback = () => {
        state.maxValue > state.count && dispatch(setCount(state.count + 1))
    }

    const resetCallback = () => {
        dispatch(setCount(state.initialCount))
    }

    const activeSettingsCallback = () => {
        dispatch(setIsSettingActive(true))
    }


    return (
        <div className={style.control}>
            <Button disabled={disabled || state.isSettingActive} name={'inc'} callback={incrementCallback}/>
            <Button disabled={state.isSettingActive} name={'reset'} callback={resetCallback}/>
            <Button name={'set'} callback={activeSettingsCallback}/>
        </div>
    );
};

export default Control;