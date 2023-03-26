import './App.css';
import {Link, Route, Routes} from 'react-router-dom'
import { X0_Start } from './X0_Start/X0_Start';
import { useState } from 'react';
import { X1_Test } from './X1_Test/X1_Test';
function App() {
  var [name_value_$, setName_value_$] = useState('')


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<X0_Start name_value_$={name_value_$} setName_value_$={setName_value_$}/>}/>
        <Route path='/X1_Test' element={<X1_Test/>} />
      </Routes>
    </div>
  );
}

export default App;
