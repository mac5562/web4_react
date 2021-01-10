import React from 'react';
import {Link} from 'react-router-dom';
import Login from './Login';

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light opacity-4">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Runners</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav  mr-auto">
              <li className="px-2"><Link to="runnerlist">Futók</Link></li>
              <li className="px-2"><Link to="addrunner">Új futó</Link></li>
            </ul>
            <ul className="navbar-nav  ml-auto">
              <Login/>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;