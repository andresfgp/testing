import './App.css';
import CommentList from './components/comment-list/CommentList';
import CommentBox from './components/comment-box/CommentBox';

function App() {
  return (
    <div className="App">
      <CommentBox />
      <CommentList />
    </div>
  );
}

export default App;
