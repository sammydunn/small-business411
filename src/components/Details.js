import { Button } from '@material-ui/core';
import React, { useState } from 'react';

const Details = (props) => {
  const { name, description, address, operatinghours } = props.biz
  console.log("name: ", name)
  const [hidden, setHidden] = useState(true);

  const handleClick = (e) => {
    setHidden(!hidden)
    console.log(hidden)
  }

  return (
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
      <Button onClick={handleClick}>Details</Button>
      {hidden
      ? <div></div>
      : <div>
        <p>address: {address}</p>
        <p>{operatinghours}</p>
      </div>
      }
    </div>
  );
}

export default Details;
