import React from 'react';

class Login extends React.Component {
    state = {
        loggedIn : false,
        client: ''
    }

    changeLoginStatus = () => {
        this.setState(prevState => ({
            loggedIn: !prevState.loggedIn
        }))
    }

    changeUser = (e) => {
        this.setState({
            client: e.target.value
        })
    }

    changeLoginMessage = () => {
        if(!this.state.loggedIn) {
            return (
            <form className="row g-1" action="/" method="GET" onSubmit={this.changeLoginStatus}>
                <div className="col-auto">
                <input value={this.state.client} type="text" className="form-control" id="input-email" placeholder="Email" onChange={this.changeUser}/>
                </div>
                <div className="col-auto">
                <input type="password" className="form-control" id="input-password" placeholder="Password"/>
                </div>
                <div className="col-auto">
                <button type="submit" className="btn btn-primary">Login</button>
                </div>
                <div className="col-auto">
                <a className="btn btn-primary btn-register" href="/register">Register</a>
                </div>
            </form>
            );
        } else {
            return (
            <ul className="navbar-nav  mr-auto">
              <li className="px-2">{this.state.client}</li>
              <li className="px-2"><button type="submit" className="btn btn-primary" onClick={this.changeLoginStatus}>Logout</button></li>
            </ul>)
        }
    }

    render() {
        return (
            <React.Fragment>
                {this.changeLoginMessage()}
            </React.Fragment>
        )
    }
}

export default Login;