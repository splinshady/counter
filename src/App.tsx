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
        countStorage && setCount(JSON.parse(countStorage))
    }, [])

    useEffect(() => {
        localStorage.setItem('count', JSON.stringify(count))
    }, [count])

    return (
        <div className="App">
            <Settings initialCount={initialCount}
                      maxValue={maxValue}
                      setInitialCount={setInitialCount}
                      setMaxValue={setMaxValue}
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
