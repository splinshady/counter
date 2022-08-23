import React, {useEffect, useState} from 'react';
import Button from "./Button";
import style from './style.module.css';

type ControlPropsType = {
    setCount: (count: number) => void,
    count: number,
    maxValue: number,
    initialCount: number,
    settingActive: boolean,
    setSettingActive: (value: boolean) => void,
}

const Control: React.FC<ControlPropsType> = (props) => {
    const [disabled, setDisabled] = useState(false)

    useEffect(() => {
        if (props.maxValue === props.count) {
            setDisabled(true)
        } else {
            setDisabled(false)
        }
    }, [props.count])

    const incrementCallback = () => {
        props.maxValue > props.count && props.setCount(props.count + 1)
    }

    const resetCallback = () => {
        props.setCount(props.initialCount)
    }

    const activeSettingsCallback = () => {
        props.setSettingActive(true)
    }


    return (
        <div className={style.control}>
            <Button disabled={disabled || props.settingActive} name={'inc'} callback={incrementCallback}/>
            <Button disabled={props.settingActive} name={'reset'} callback={resetCallback}/>
            <Button name={'set'} callback={activeSettingsCallback}/>
        </div>
    );
};

export default Control;