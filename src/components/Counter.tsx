import React, {useState} from 'react';

const Counter = () => {
    const [counter, setCounter] = useState(0);
    const [counter2, setCounter2] = useState(0);
    const [counter3, setCounter3] = useState(0);
    return (
        <div className="box">
            <div className="counter 1">
                <button onClick={() => setCounter(counter+1)}>Up</button>
                <p>{counter}</p>
                <button onClick={() => setCounter(counter-1)}>Down</button>
            </div>
            {/* <div className="counter 2">
                <button onClick={() => setCounter2(counter2+1)}>Up</button>
                <p>{counter2}</p>
                <button onClick={() => setCounter2(counter2-1)}>Down</button>
            </div>
            <div className="counter 3">
                <button onClick={() => setCounter3(counter3+1)}>Up</button>
                <p>{counter3}</p>
                <button onClick={() => setCounter3(counter3-1)}>Down</button>
            </div> */}
        </div>
    );
}

export default Counter;