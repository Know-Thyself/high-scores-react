import './App.css';
import scores from './scores';
import HighScoreTable from './HighScoreTable';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="header">Countries High Score Table</h1>
        <HighScoreTable country={scores}/>
      </header>
    </div>
  );
}

export default App;
