import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// 임시 컴포넌트들 (나중에 구현할 예정)
const HomePage = () => (
  <div className="home-page">
    <h1>React 상태관리 라이브러리별 Todo App</h1>
    <p>다양한 상태관리 방식을 비교해보세요!</p>
    <div className="library-links">
      <Link to="/useState" className="library-link">
        useState
      </Link>
      <Link to="/useReducer" className="library-link">
        useReducer
      </Link>
      <Link to="/useContext" className="library-link">
        useContext
      </Link>
      <Link to="/redux" className="library-link">
        Redux
      </Link>
      <Link to="/zustand" className="library-link">
        Zustand
      </Link>
    </div>
  </div>
);

const UseStateTodo = () => <div>useState Todo App (구현 예정)</div>;
const UseReducerTodo = () => <div>useReducer Todo App (구현 예정)</div>;
const UseContextTodo = () => <div>useContext Todo App (구현 예정)</div>;
const ReduxTodo = () => <div>Redux Todo App (구현 예정)</div>;
const ZustandTodo = () => <div>Zustand Todo App (구현 예정)</div>;

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navigation">
          <Link to="/" className="nav-link">
            홈
          </Link>
          <Link to="/useState" className="nav-link">
            useState
          </Link>
          <Link to="/useReducer" className="nav-link">
            useReducer
          </Link>
          <Link to="/useContext" className="nav-link">
            useContext
          </Link>
          <Link to="/redux" className="nav-link">
            Redux
          </Link>
          <Link to="/zustand" className="nav-link">
            Zustand
          </Link>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/useState" element={<UseStateTodo />} />
            <Route path="/useReducer" element={<UseReducerTodo />} />
            <Route path="/useContext" element={<UseContextTodo />} />
            <Route path="/redux" element={<ReduxTodo />} />
            <Route path="/zustand" element={<ZustandTodo />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
