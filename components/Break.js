// import required packages
import React, {useState} from 'react';

// Create a function 'Break'
// constist of a variable that carries an array
// [*state variable*, *funtion*] = *initatal values*
function Break() {
    const [Break, setBreak] = useState(0);

    return(
        <div>
            <p>You look tired, you should take a break!</p>
            <button onClick={() => setBreak(Break + 1)}>Take a break</button>
            <p>You took {Break} Breaks</p>
        </div>
    )
}

export default Break;