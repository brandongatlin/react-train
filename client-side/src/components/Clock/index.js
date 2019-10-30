import React, {useState} from 'react';

const Clock = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    const calculateTime = () => {
        setTime(new Date().toLocaleTimeString());
    }

    window.setInterval(calculateTime, 1000);

    return(
        <div>
            <h1>Clock</h1>
            <h2>{time}</h2>
        </div>
    )
}

export default Clock;