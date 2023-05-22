import './App.css';
import Profile from './Profile';
import TicTacToe from './TicTacToe';
import DarkMode from './DarkMode';



const App = (props) => {
  return <div className="app">
    <Profile />
    <DarkMode />
    <TicTacToe />
    <div className="todo">
      <h1>Todo</h1>
    </div>
  </div>
}

export default App;
