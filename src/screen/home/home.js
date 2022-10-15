import './home.css';
import {svgs} from '../../assets/logo/index'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src='../../assets/logo/facebook.svg'></img>
        <img src={svgs.Twitter}></img>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
