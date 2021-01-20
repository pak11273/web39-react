import React from 'react'

import './App.css'
import School from './components/schoolLink'

const App = () => {
  return (
    <div className="App">
     <header>
         <h1>Welcome WEB39 Students</h1>
     </header>
    <div className='links'>
        <School />
    </div>

    </div>
  );
};

export default App;