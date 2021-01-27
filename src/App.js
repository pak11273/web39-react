import React from 'react'
import {Link, Switch, Route} from 'react-router-dom'
import './App.css'

import School from './components/schoolLink'
import Notes from './components/notesLink'
import Quotes from './components/allQuotes'
import Form from './components/form'

const App = () => {
  return (
    <div className="App">
     <header>
         <h1>Welcome WEB39 Students</h1>
         <nav>
           <Link to='/'>Quotes</Link>
           <Link to='/school'>School Links</Link>
           <Link to='/notes'>Note Links</Link>
           <Link to='/form'>Form</Link>
         </nav>
     </header>
    <Switch>
      <Route path='/school'>
        <School />
      </Route>
      <Route path='/notes'>
        <Notes />
      </Route>
      <Route path='/form'>
        <Form />
      </Route>
      <Route exact path='/'>
        <Quotes />
      </Route>
    </Switch>
    </div>
  );
};

export default App;