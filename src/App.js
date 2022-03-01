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

    // this.state = {
    //   isLoading: true,
    // };
  }

  // componentDidMount() {
  //   this.setState({
  //     isLoading: false,
  //   });
  // }

  handleLoad() {
    this.setState((prevState) => ({
      isLoading: !prevState.isLoading,
    }));
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/neur4l.fy/">
            <Login { ...this.state } handleLoad={ this.handleLoad } />
          </Route>
          <Route
            path="/search"
            component={ Search }
          />
          <Route
            path="/neur4l.fy/album/:id"
            component={ (props) => <Album { ...props } /> }
          />
          <Route path="/neur4l.fy/favorites" component={ Favorites } />
          <Route path="/neur4l.fy/profile/edit" component={ ProfileEdit } />
          <Route path="/neur4l.fy/profile" component={ Profile } />
          <Route exact path="*" component={ NotFound } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

//
