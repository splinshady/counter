import React, {useEffect, useState} from 'react';
import './App.css';
import Counter from "./components/Counter";
import Settings from "./components/Settings";

function App() {
    const [initialCount, setInitialCount] = useState(0)
    const [count, setCount] = useState(initialCount)
    const [maxValue, setMaxValue] = useState(5)

    useEffect(() => {
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
    }, [maxValue])

    return (
        <div className="App">
            <Settings initialCount={initialCount}
                      maxValue={maxValue}
                      setInitialCount={setInitialCount}
                      setMaxValue={setMaxValue}
                      setCount={setCount}
            />
            <Counter count={count}
                     maxValue={maxValue}
                     setCount={setCount}
                     initialCount={initialCount}
            />
        </div>
    );
}

export default App;
