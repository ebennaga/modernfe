import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Login extends Component {



  render(){
    return(
      <div className="Login">

          <TextField hintText="Nama Pengguna" type="text" />
            <br />
          <TextField hintText="Password" type="password" />
          <RaisedButton label="Login" backgroundColor="#009688" />
          
      </div>
    );
  }
}


export default Login;
