import React, {Component} from 'react';

class File extends Component {

  // borrarPrograma() {
  //   axios.delete(ROOT_URL+"/programs/"+this.props.estudiante.id).then(response => {
  //     console.log(response);
  //     console.log('Borro programa', this.props.nombre);
  //   })
  // }

  render(){
    return (
      <div className="col-md-6 col-sm-6 col-xs-12">
        <div className="card">
          <div className="card-block">
            <h4 className="card-title">{this.props.file.name}</h4>
          </div>
          <div className="card-footer">
            <a href={this.props.file.drive_url} className="btn btn-primary " target='_blank'>Download</a>

          </div>
          {/* <button onClick={this.borrarEstudiante.bind(this)}>Borrar</button> */}
         </div>

      </div>


    );
  }
}

export default File;
