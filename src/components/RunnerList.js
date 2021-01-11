import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class PostList extends Component {
  state = {
    posts: [],
  }

  getRunners = async () => {
    await axios.get('/runners')
    .then(res => this.setState({posts: res.data}))
    .catch(error => console.log(error));
  }

  deleteRunner = async (link) => {
    await axios.delete(link)
    .then(() => this.getRunners())
    .catch(error => console.log(error));
  }

  componentDidMount() {
    this.getRunners();
  }

  render() {
    return (
      <div className="row mt-4 p-4">
        {this.state.posts.map((post, index) => (
          <div className="col-4 mb-4" key={post._id}>
            <div className="card">
              <div className="card-header">
              {new Date(post.created_at).getFullYear()}.{new Date(post.created_at).getMonth()}.{new Date(post.created_at).getDate()} {new Date(post.created_at).getHours()}:{new Date(post.created_at).getMinutes()}
              </div>
              <div className="card-body">
                <h5 className="card-title">{post.vezeteknev+" "+post.keresztnev}</h5>
                <p className="card-text">{post.address}</p>
                <Link to="/runner" className="btn btn-primary" onClick={() => this.props.getLink(`/runners/${post._id}`)}>More</Link>
                <button className="btn btn-danger ml-1" onClick={() => this.deleteRunner(`/runners/${post._id}`)}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };
}

export default PostList;