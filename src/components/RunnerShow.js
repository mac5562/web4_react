import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class PostShow extends Component {
  render() {
    return (
      <div className="card text-center mt-4 p-4">
        <div className="card-header">
          {this.props.post._id}
        </div>
        <div className="card-body">
          <h5 className="card-title">{this.props.post.vezeteknev+this.props.post.keresztnev}</h5>
          <p className="card-text">{this.props.post.kor}</p>
          <p className="card-text">{this.props.post.nem}</p>
          <Link to="/runnerlist" className="btn btn-primary">Back</Link>
        </div>
        <div className="card-footer text-muted">
        {new Date(this.props.post.created_at).getFullYear()}.{new Date(this.props.post.created_at).getMonth()}.{new Date(this.props.post.created_at).getDate()} {new Date(this.props.post.created_at).getHours()}:{new Date(this.props.post.created_at).getMinutes()}
        </div>
      </div>
    );
  };
}

export default PostShow;