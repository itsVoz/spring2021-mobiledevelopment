// Import required packages
import React, {Component} from 'react';

// Creates a class component 'Steps'
// props are sent back to component
// steps == 0 
class Steps extends Component {
    constructor(props) {
        super(props)
        this.state = {
            steps: 0
        };
    };

// Process values given   
render(){

    // return values to browser
    // Take a Step: sets the state to increase this.state by one on button click
    // Take a Lap: sets the state to increase this.state by 500 on button click
    // Reset Steps: steps are reset to a value of steps == 0
    return(
        <div>
            <h2>Steps Taken: {this.state.steps}</h2>
            <button onClick={() => this.setState({steps: this.state.steps + 1})}>Take a Step</button>
            <button onClick={() => this.setState({steps: this.state.steps + 500})}>Take a Lap</button>
            <button onClick={() => this.setState({steps: 0})}>Reset Steps</button>
        </div>
    )
}    
}

// export dealut values
export default Steps;