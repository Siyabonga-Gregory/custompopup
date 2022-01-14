import logo from './logo.svg';
import './App.css';
import ModalV1 from "./component/Modal/ModalV1";

function App() {
  return (

    <div className="App">
      <header className="App-header">
           <img src={logo} className="App-logo" alt="logo" />
          <ModalV1/>
      </header>
    </div>
  );
}

export default App;
