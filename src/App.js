import './App.css';
import scores from './scores';
import HighScoreTable from './HighScoreTable';
import GlobalHighScores from './GlobalHighScores';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="header">Global High Scores Table</h1>
        <GlobalHighScores global={scores}/>
        <h1 className="header">Countries High Score Table</h1>
        <HighScoreTable country={scores}/>
      </header>
    </div>
  );
}

export default App;
