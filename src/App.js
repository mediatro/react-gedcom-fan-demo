import logo from './logo.svg';
import './App.css';
import 'arbre-o-matic/assets/scss/main.scss';

import {FanJqAdapter} from "./components/fan-jq-adapter";

function App() {
  return (
    <div className="App">
      <FanJqAdapter></FanJqAdapter>
    </div>
  );
}

export default App;
