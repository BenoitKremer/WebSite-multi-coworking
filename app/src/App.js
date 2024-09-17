import './App.css';
import Menu from './Menu';
import Tools from './Tools';
import Database from './Database';

function App() {

  return (
    <div className="App grid grid-rows-8 grid-cols-8 gap-5">
      <Menu />
      <Tools />
      <Database />
    </div>
  );
}

export default App;
