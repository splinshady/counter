import React, {useEffect, useState} from 'react';
import style from "./style.module.css";
import Input from "./Input";
import Button from "./Button";
import {useDispatch, useSelector} from "react-redux";
import {rootStateType} from "../state/store";
import {
    counterStateType,
    setCount, setError,
    setInitialCount,
    setIsSettingActive,
    setMaxValue
} from "../reducers/counrer-reducer";

type SettingsPropsType = {}

const Settings: React.FC<SettingsPropsType> = (props) => {
    const dispatch = useDispatch()
    const state = useSelector<rootStateType, counterStateType>(state => state.counter)

    const [inputInitialCount, setInputInitialCount] = useState(state.initialCount)
    const [inputMaxValue, setInputMaxValue] = useState(state.maxValue)

    const setSettings = () => {
        dispatch(setInitialCount(inputInitialCount))
        dispatch(setMaxValue(inputMaxValue))
        dispatch(setCount(inputInitialCount))
        dispatch(setIsSettingActive(false))
    }

/*    useEffect(() => {
        let initialCountStorage = localStorage.getItem('initialCount')
        let maxValueStorage = localStorage.getItem('maxValue')
        initialCountStorage && setInputInitialCount(JSON.parse(initialCountStorage))
        maxValueStorage && setInputMaxValue(JSON.parse(maxValueStorage))
    }, [])*/

    const InitialCountChangeHandler = (value: number) => {
        if (value >= inputMaxValue || value < 0) {
            dispatch(setError(true))
        } else {
            dispatch(setError(false))
        }
        setInputInitialCount(value)
    }
    const maxValueChangeHandler = (value: number) => {
        if (value <= inputInitialCount) {
            dispatch(setError(true))
        } else {
            dispatch(setError(false))
        }
        setInputMaxValue(value)
    }

    return (
        <div className={style.counter}>
            <div className={style.input_container}>
                <Input name={'max value'}
                       callback={maxValueChangeHandler}
                       value={inputMaxValue}
                       error={state.error}
                />

                <Input name={'start value'}
                       callback={InitialCountChangeHandler}
                       value={inputInitialCount}
                       error={state.error}
                />
            </div>
            <div className={style.control}>
                <Button disabled={state.error} name={'set'} callback={setSettings}/>
            </div>
        </div>
    );
};

export default Settings;