import React, {Component} from 'react';
import axios from 'axios';
const ROOT_URL = "https://thebibleapp.herokuapp.com/api";
// const ROOT_URL = "http://localhost:3000/api";
import {Link} from 'react-router';
import Courses from './courses';


class Program extends Component {

  constructor(props) {
      super(props);

      this.state = {
          courses: [],
          name: '',
          description: '',
          url: '',
          _id: ''
      }
  }

  borrarPrograma() {
    axios.delete(ROOT_URL+"/programs/"+this.props.program.program_id).then(response => {
      console.log(response);
      console.log('Borro programa', this.props.program.nombre);
    })
  }

  render(){
    return (
      <div className="col-md-6 col-sm-6 ">
        <div className="card">
          <div className="card-block">
            <h4 className="card-title">{this.props.program.name}</h4>
            <p className="card-text">{this.props.program.description}</p>
          <a href={this.props.program.url} className="btn btn-primary cardbtn">URL</a>


        <Link className="btn btn-primary cardbtn" to={'/programs/' + this.props.program._id + '/courses'}>See courses</Link>
        <button className="btn btn-primary " onClick={this.borrarPrograma.bind(this)}>Delete</button>
          </div>
        </div>
      </div>


    );
  }
}

export default Program;
