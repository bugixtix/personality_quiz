import './App.css';
import {Link, Route, Routes} from 'react-router-dom'
import { X0_Start } from './X0_Start/X0_Start';
import { useState } from 'react';
function App() {
  var [name_value_$, setName_value_$] = useState('')


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<X0_Start name_value_$={name_value_$} setName_value_$={setName_value_$}/>}/>
      </Routes>
    </div>
  );
}

export default App;
