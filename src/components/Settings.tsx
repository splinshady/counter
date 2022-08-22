import React, {useEffect, useState} from 'react';
import style from "./style.module.css";
import Input from "./Input";
import Button from "./Button";

type SettingsPropsType = {
    maxValue: number,
    initialCount: number,
    setInitialCount: (value: number) => void,
    setMaxValue: (value: number) => void,
    setCount: (value: number) => void,
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
        let initialCountStorage = localStorage.getItem('settingsInitialCount')
        let maxValueStorage = localStorage.getItem('settingsMaxValue')
        initialCountStorage && setInputInitialCount(JSON.parse(initialCountStorage))
        maxValueStorage && setInputMaxValue(JSON.parse(maxValueStorage))
    }, [])

    useEffect(() => {
        localStorage.setItem('settingsInitialCount', JSON.stringify(inputInitialCount))
    }, [inputInitialCount])
    useEffect(() => {
        localStorage.setItem('settingsMaxValue', JSON.stringify(inputMaxValue))
    }, [inputMaxValue])

    return (
        <div className={style.counter}>
            <div className={style.input_container}>
                <Input name={'max value'}
                       callback={setInputMaxValue}
                       value={inputMaxValue}/>

                <Input name={'start value'}
                       callback={setInputInitialCount}
                       value={inputInitialCount}/>
            </div>
            <div className={style.control}>
                <Button name={'set'} callback={setSettings}/>
            </div>
        </div>
    );
};

export default Settings;