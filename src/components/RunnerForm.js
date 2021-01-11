import React, {Component} from 'react';

class PostForm extends Component {
  render() {
    return (
      <form action="/runners" method="POST" className="mt-4 p-4">
        <div className="form-group row">
          <div className="input-group col-12">
            <label className="input-group-text" for="vezeteknevID">Futó vezetékneve:</label>
            <input type="text" class="form-control" name="vezeteknev" id="vezeteknevID"/>
          </div>
        </div>

        <div className="form-group row">
          <div className="input-group col-12">
            <label className="input-group-text" for="keresztnevID">Futó keresztneve :</label>
            <input type="text" class="form-control" name="keresztnev" id="keresztnevID"/>
          </div>
        </div>
        
        <div className="form-group row">
          <div className="input-group col-12">
            <label className="input-group-text" for="korID">Futó kora :</label>
            <input type="text" class="form-control" name="kor" id="korID"/>
          </div>
        </div>

        <div className="form-group row">
          <div className="input-group col-12">
            <label className="input-group-text" for="nemID">Futó neme :</label>
            <input type="text" class="form-control" name="nem" id="nem"/>
          </div>
        </div>

        <div className="form-group row">
          <div className="col-12">
            <button type="submit" name="eventSubmit" className="btn btn-primary">Save</button>
          </div>
        </div>
      </form>
    );
  };
}

export default PostForm;