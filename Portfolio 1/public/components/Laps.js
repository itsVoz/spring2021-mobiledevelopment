// import required packages
import React, {useState} from 'react';

// Create a function 'Laps'
// constist of a variable that carries an array
// [*state variable*, *funtion*] = *initatal values*
function Laps() {
    const [lapNumber, setLap] = useState(0)

    // Returns values to browser
    // Add laps: on click the 'setLap' funtion adds 1 lap to the current lap value
    // Remove all Laps: setLaps is returned to the value of 0
    return(
        <div>
            <h2>Laps Total: {lapNumber}</h2>
            <button onClick={() => setLap(lapNumber + 1)}>Add Laps</button>
            <button onClick={() => setLap(0)}>Remove all Laps</button>
        </div>
    )
}

// Export default values
export default Laps;