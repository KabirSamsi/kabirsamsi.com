import Navbar from './Navbar.js';
import './App.css';

const Outside = function() {
  return (
    <div className="App main-display">
      <Navbar current="outside"/>
      <header className="App-header">
        <h1>Coming Soon!</h1>
      </header>
    </div>
  );
}

export default Outside;