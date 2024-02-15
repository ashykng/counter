import React, {useState} from "react";


function Counter(){
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + 1);
    }

    const decrement = () => {
        setCounter(counter - 1);
    }

    const reset = () => {
        setCounter(0);
    }

    return(
        <div className="container">
            <p className="counterDisplay">{counter}</p>
            <button className="btn" onClick={decrement}>Decrease</button>
            <button className="btn" onClick={reset}>Reset</button>
            <button className="btn" onClick={increment}>Increase</button>
        </div>
    )
}

export default Counter