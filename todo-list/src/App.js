import './App.css';
import {TodoWrapper} from './components/TodoWrapper';
import Pokemon from "./axios/pokemon";

function App() {
  return (
    <div className="App">
      <TodoWrapper/>
      <Pokemon/>
    </div>
  );
}

export default App;