import logo from './logo.svg';
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar';
import Home from './pages/Home';

/**
 * This class responsible  to represents principal access in the system
 **/

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
    </div>
  );
}

export default App;
