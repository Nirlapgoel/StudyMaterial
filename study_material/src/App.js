import React from 'react';
import Home from './Components/Home';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import GroupChat from './Components/GroupChat';
import StudyMaterial from './Components/StudyMaterial';

function App() {
  return (
      <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/studymaterial" component={StudyMaterial} exact/>
      <Route path="/groupchat" component={GroupChat} exact/>
      </Switch>
  )
}

export default App;

