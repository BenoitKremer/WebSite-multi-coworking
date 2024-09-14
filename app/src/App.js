import './App.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        <p>This is the content of the App component.</p>
      </div>
    </div>
  );
}

export default App;
