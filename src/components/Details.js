import { useState } from 'react'
import { Button } from '@mui/material'
// import DeleteIcon from '@mui/icons-material/Delete';
import Maps from './Maps'
import cookie from 'cookie'

export default function Details(props) {
    const {name, description, ophours, address} = props.biz
    const [hidden, isHidden] = useState(true)
    const cookies = cookie.parse(document.cookie)

    return (
        <div style={{width:"400px", 
        height:"auto", 
        margin:"auto", 
        border:"1px black solid", 
        marginTop:"40px", 
        borderRadius:"10px", 
        boxShadow:" 0 0 4px" 
    }}
    >
        {console.log(cookie.parse(document.cookie))}
            {cookies.loggedIn && <div>hello</div>}
            <div style={{margin:"30px", textAlign:"center"}}>
                <h1>{name}</h1>
                <p style={{textAlign:"left"}}>{description}</p>
                <Button variant="contained" style={{marginBottom:"10px"}} onClick={()=> isHidden(!hidden)} >Details</Button>
            </div>
            {!hidden && (
                <div>
                    <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", margin:"20px"}}>
                        <ol style={{listStyleType:"none", padding: "0", fontSize:"12px", margin:"20px"}}>
                            <h3>Hours:</h3>
                            <li><strong>Monday:</strong> <br/>{ophours.Monday}</li>
                            <li><strong>Tuesday: </strong><br/>{ophours.Tuesday}</li>
                            <li><strong>Wednesday: </strong><br/>{ophours.Wednesday}</li>
                            <li><strong>Thursday:</strong> <br/>{ophours.Thursday}</li>
                            <li><strong>Friday: </strong><br/>{ophours.Friday}</li>
                            <li><strong>Saturday: </strong><br/>{ophours.Saturday}</li>
                            <li><strong>Sunday: </strong><br/>{ophours.Sunday}</li>
                        </ol>
                        <ol style={{listStyleType:"none", padding: "0", fontSize:"12px"}}>
                            <h3>Address:</h3>
                            <li>{address.street}</li>
                            <li>{address.city + ' ' + address.state}</li>
                            <li>{address.zip}</li>
                        </ol>
                    </div>
                    <Maps address={address} />
                </div>
            )}
        </div>
    )
}