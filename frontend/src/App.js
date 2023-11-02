import React from 'react';
import './App.css';
import Movies from './Pages/Movies';
import { BrowserRouter, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'> <Movies /></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
