import './App.css';
import {Link, Route, Routes} from 'react-router-dom'
import { X0_Start } from './X0_Start/X0_Start';
import { useState } from 'react';
import { X1_Test } from './X1_Test/X1_Test';
function App() {
  var [name_value_$, setName_value_$] = useState('')
  var [quesNr_$, setNr_$] = useState(0)
  var [curquesNr_$, setcurNr_$] = useState(0)
  var [clicked_$, setClicked_$] = useState(false)

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<X0_Start name_value_$={name_value_$} setName_value_$={setName_value_$}/>}/>
        <Route path='/X1_Test' element={
        <X1_Test 
        quesNr_$={quesNr_$} 
        setNr_$={setNr_$}
        clicked_$={clicked_$}
        setClicked_$={setClicked_$}
        curquesNr_$={curquesNr_$}
        setcurNr_$={setcurNr_$}
        />} />
      </Routes>
    </div>
  );
}

export default App;
