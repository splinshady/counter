import React, {useEffect, useState} from 'react';
import './App.css';
import Counter from "./components/Counter";
import Settings from "./components/Settings";
import {useSelector} from "react-redux";
import {rootStateType} from "./state/store";

function App() {
/*    useEffect(() => {
        let countStorage = localStorage.getItem('count')
        let initialCountStorage = localStorage.getItem('initialCount')
        let maxValueStorage = localStorage.getItem('maxValue')
        countStorage && setCount(JSON.parse(countStorage))
        initialCountStorage && setInitialCount(JSON.parse(initialCountStorage))
        maxValueStorage && setMaxValue(JSON.parse(maxValueStorage))
    }, [])
    useEffect(() => {
        localStorage.setItem('count', JSON.stringify(count))
    }, [count])
    useEffect(() => {
        localStorage.setItem('initialCount', JSON.stringify(initialCount))
    }, [initialCount])
    useEffect(() => {
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    }, [maxValue])*/

    const isSettingActive = useSelector<rootStateType, boolean>(state => state.counter.isSettingActive)

    return (
        <div className="App">
            {isSettingActive ?
                <Settings />
                :
                <Counter />}
        </div>
    );
}

export default App;
