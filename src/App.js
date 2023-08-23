import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PlayerList from './PlayerList';
import Navbar from 'react-bootstrap/Navbar';


function App() {
  return (
    // The header container
    <div className="App">
    <div className="Header" style ={{textAlign: 'center', marginTop: '30px'}}>
      <Navbar.Brand href="#home" style = {{fontSize: '40px', fontWeight: '600'}}>FIFA player cards</Navbar.Brand></div>
      <PlayerList/>
    </div>
  );
}

export default App;
