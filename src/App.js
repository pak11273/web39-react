import React from 'react'
import './App.css'

import School from './components/schoolLink'
import Notes from './components/notesLink'
import Quotes from './components/allQuotes'

const App = () => {
  return (
    <div className="App">
     <header>
         <h1>Welcome WEB39 Students</h1>
     </header>
    <div className='links'>
        <School />
        <Notes />
    </div>
    <div className='quotes'>
      <Quotes />
    </div>
    </div>
  );
};

export default App;