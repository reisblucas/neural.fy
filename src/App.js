import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './app.css';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import Search from './pages/Search';

class App extends React.Component {
  constructor() {
    super();

    this.handleLoad = this.handleLoad.bind(this);
  }

  handleLoad() {
    this.setState((prevState) => ({
      isLoading: !prevState.isLoading,
    }));
  }

  render() {
    return (
      <BrowserRouter basename="/neur4l.fy">
        <Switch>
          <Route exact path="/">
            <Login { ...this.state } handleLoad={ this.handleLoad } />
          </Route>
          <Route
            path="/search"
            component={ (props) => <Search { ...props } /> }
          />
          <Route
            path="/album/:id"
            component={ (props) => <Album { ...props } /> }
          />
          <Route
            path="/favorites"
            component={ (props) => <Favorites { ...props } /> }
          />
          <Route
            path="/profile/edit"
            component={ (props) => <ProfileEdit { ...props } /> }
          />
          <Route
            path="/profile"
            component={ (props) => <Profile { ...props } /> }
          />
          <Route
            exact
            path="*"
            component={ (props) => <NotFound { ...props } /> }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

//
