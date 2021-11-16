import React from 'react';
import { Button } from '@material-ui/core'

const Navbar = () => {
  return (
    <div style={{
    backgroundColor:"lavender",
    width:"100%",
    margin:"auto", 
    height:"80px", 
    display:"grid",
    gridTemplateColumns:"1fr 1fr",

    }}>
      <div style={{
        marginLeft:"20px",
        textAlign:"left"
      }}>
        <h2>Austin Small Business</h2>
      </div>
      <div style={{
        display:"flex",
        height:"80px",
        flexDirection:"row",
        margin:"auto",
        justifyContent:"flex-end",
        alignItems:"center"
      }}>
    <Button variant="contained" color="primary" style={{margin:"10px"}}>Login</Button>
    <Button variant="contained" color="primary" style={{margin:"10px"}}>Listings</Button>
      </div>
    </div>
  );
}

export default Navbar;
