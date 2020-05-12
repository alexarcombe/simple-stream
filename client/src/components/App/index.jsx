import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../../history';
import Header from '../Layout/Header';
import StreamCreate from '../StreamCreate';
import StreamList from '../SteamList';
import StreamEdit from '../StreamEdit';
import StreamShow from '../StreamShow';

function App() {
  return (
    <div className="app">
      <Router history={history}>
        <Header />
        <div className="ui container">
          <Switch>
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" exact component={StreamCreate} />
            <Route path="/streams/edit/:id" exact component={StreamEdit} />
            <Route path="/streams/:id" exact component={StreamShow} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
