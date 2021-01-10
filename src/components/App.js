import React from 'react';
import Navbar from './Navigation';
import Banner from './Banner';
import RunnerForm from './RunnerForm';
import RunnerList from './RunnerList';
import RunnerShow from './RunnerShow';
import Register from './Register';
import axios from 'axios';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';

class App extends React.Component {
  state = {
    loggedIn: false,
    post: {}
  }

  getLink = (link) => {
    axios.get(link)
    .then(res => this.setState({post: res.data}))
    .catch(error => console.log(error));
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/> 
          <Route exact path="/">
            <Banner/>
          </Route>
          <Route exact path="/addrunner">
            <RunnerForm />
          </Route>
          <Route exact path="/runnerlist">
            <RunnerList 
            getLink={this.getLink}/>
          </Route>
          <Route path="/runner">
            <RunnerShow
            post={this.state.post}/>
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
