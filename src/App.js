import './App.css';
import {Link, Route, Routes} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      hello
      <Routes>
        <Route path='/' element={<div>'hellothere'</div>}/>
      </Routes>
    </div>
  );
}

export default App;
