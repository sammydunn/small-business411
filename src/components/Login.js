import React, { useState } from 'react';
import {Paper, TextField, Button} from '@material-ui/core'

const Login = () => {

  const [user, setUser] = useState({username:"",loggedIn:false})

  const handleChange = (e) => {
    //console.log(e.target.value)
    setUser((previousUser) => ({
      ...previousUser,
      username: e.target.value 
    }))
  }

  const handleClick = (e) => {
    setUser((previousUser) => ({
      ...previousUser,
      loggedIn: true
    }))
  }

  return (
    <div>
      <Paper style={{
        width:"400px",
        height:"400px", 
        boxShadow:"2px",
        margin:"auto",
        paddingTop:"20px",

      }}>
          <h3>Log In</h3>
          <div style={{
            width:"300px",
            margin:"auto"
          }}>
        <TextField fullWidth variant="filled" label="Usernam" onChange={handleChange} style={{
          marginBottom:"15px",
        }}></TextField>
        <TextField fullWidth variant="filled" label="Password" style={{
          marginBottom:"15px",
        }}></TextField>
        <Button variant="contained" color="primary" onClick={handleClick}>Click</Button>
        {console.log(user)}
        </div>
      </Paper>
    </div>
  );
}

export default Login;
