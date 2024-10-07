
import './App.css';
import ActivateSim from './components/ActivateSim';
import DeactivateSim from './components/DeactivateSim';

function App() {
  return (
    <div className="App">
      <h1>SIM Card Manager</h1>
            <ActivateSim />
            <DeactivateSim />
    </div>
  );
}

export default App;
