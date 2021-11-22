import React from 'react'
import Details from './Details'
import { LoadScript } from '@react-google-maps/api';
import { Button } from '@mui/material';

export default function Listings(props) {
    const handleClick = () => {
        console.log('click')
    }

    return (
        <div>
            <Button onClick={handleClick} >Add Local Business</Button>
                {props.businesses && 
                <div>
                    <LoadScript googleMapsApiKey="AIzaSyAVA4rcMV0PwCwvOOGJz6MjjZYFePJdv-E">
                        {props.businesses.map((biz, index) => (
                            <Details key={index} biz={biz}/>
                        ))}
                    </LoadScript>
                </div>
                }
        </div>
    )
}