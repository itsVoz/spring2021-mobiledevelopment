// Importing required packages
import Steps from './components/Steps'
import Laps from './components/Laps'
import Break from './components/Break'

// Function call to return the dynamic components
function App() {
  return (
    <div >
      <h1>Exercise Tracker</h1>
      <Steps/>
      <Laps/>
      <Break/>
    </div>
  );
}

// export default values
export default App;
