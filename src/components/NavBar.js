import React from 'react'
import { Link } from 'react-router-dom'
import {Button, IconButton} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';

export default function NavBar() {


    return (
        <div style={{
                width:"100%",
                minWidth:"500px",
                margin:"auto",
                height:"80px", 
                backgroundColor:"#76D7C4", 
                display:"grid", 
                gridTemplateColumns:"25% auto 25%",
                alignItems:"center"
            }}>
            <div style={{textAlign:'left', paddingLeft:'30px'}}>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
            </div>
            <div style={{minWidth:"200px", margin:'auto'}}>
                <h3>My Local Favorite Restaurants</h3>
            </div>
            <div style={{display:"flex", justifyContent:"right", margin:'auto', maxWidth:"300px"}}>
                <nav style={{}}>
                    <Link  style={{textDecoration:'none'}} to="/"><Button variant="contained" >Home</Button></Link>
                    <Link  style={{textDecoration:'none'}} to="/listings"><Button variant="contained" >Listings</Button></Link>
                    <Link  style={{textDecoration:'none'}} to="/login"><Button variant="contained" >Login</Button></Link>
                </nav>
            </div>
        </div>
    )
}