import React, {useEffect, useState} from 'react';
import style from "./style.module.css";
import Input from "./Input";
import Button from "./Button";

type SettingsPropsType = {
    maxValue: number,
    initialCount: number,
    settingActive: boolean,
    setInitialCount: (value: number) => void,
    setMaxValue: (value: number) => void,
    setCount: (value: number) => void,
    setError: (value: boolean) => void,
    setSettingActive: (value: boolean) => void,
}

const Settings: React.FC<SettingsPropsType> = (props) => {
    const [inputInitialCount, setInputInitialCount] = useState(props.initialCount)
    const [inputMaxValue, setInputMaxValue] = useState(props.maxValue)

    const setSettings = () => {
        props.setInitialCount(inputInitialCount)
        props.setMaxValue(inputMaxValue)
        props.setCount(inputInitialCount)
    }

    useEffect(() => {
        let initialCountStorage = localStorage.getItem('initialCount')
        let maxValueStorage = localStorage.getItem('maxValue')
        initialCountStorage && setInputInitialCount(JSON.parse(initialCountStorage))
        maxValueStorage && setInputMaxValue(JSON.parse(maxValueStorage))
    }, [])

    const InitialCountChangeHandler = (value: number) => {
        if (value >= inputMaxValue) {
            props.setError(true)
        } else {
            props.setError(false)
        }
        setInputInitialCount(value)
    }
    const maxValueChangeHandler = (value: number) => {
        if (value <= inputInitialCount) {
            props.setError(true)
        } else {
            props.setError(false)
        }
        setInputMaxValue(value)
    }
    const blurHandler = () => {
        props.setSettingActive(false)
    }
    const focusHandler = () => {
        props.setSettingActive(true)
    }

    return (
        <div className={style.counter}>
            <div className={style.input_container}>
                <Input name={'max value'}
                       callback={maxValueChangeHandler}
                       value={inputMaxValue}
                       blurHandler={blurHandler}
                       focusHandler={focusHandler}
                />

                <Input name={'start value'}
                       callback={InitialCountChangeHandler}
                       value={inputInitialCount}
                       blurHandler={blurHandler}
                       focusHandler={focusHandler}
                />
            </div>
            <div className={style.control}>
                <Button name={'set'} callback={setSettings}/>
            </div>
        </div>
    );
};

export default Settings;