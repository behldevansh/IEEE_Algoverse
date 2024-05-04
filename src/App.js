import Board from './components/board';
import './components/style.css';
import GithubCorner from './components/GithubCorner';

function App() {
  return (
    <>
    <GithubCorner url='https://github.com/behldevansh/IEEE_Algoverse'/>

    <div className="App" id='main'>
        <Board></Board>
    </div>
    </>
  );
}

export default App;
