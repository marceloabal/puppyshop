import logo from './logo.svg';
import './App.css';
import MainMenu from './components/MainMenu';


function App() {
  return (

    <div className="App">
      <header className="App-header">
        <p>
        <MainMenu />
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        <h1>Puppy Shop</h1>  
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
