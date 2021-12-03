import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function AddBusiness(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [id, setId] = React.useState('')

  React.useEffect(()=>{
    console.log(props.businesses.length)
    setId(props.businesses.length + 1)
  },[props.businesses])
  
  const [address, setAddress] = React.useState({
    street: "",
    city: "",
    state: "",
    zip: "",
    lat: "",
    long: ""
  })
  const [ophours, setOphours] = React.useState({
    Monday: "",
    Tuesday: "",
    Wednesday: "",
    Thursday: "",
    Friday: "",
    Saturday: "",
    Sunday: "",
  })

  const [body, setBody] = React.useState({
    name: "",
    description: "",
  })
  
  function handleChange(e){
    const {name, value} = e.target
    setBody((prevBody) => ({
      ...prevBody,
      [name]: value
    }))
  }
  function handleAddress(e){
    const {name, value} = e.target
    setAddress((prevBody) => ({
      ...prevBody,
      [name]: value
    }))
    console.log(address)
  }
  function handleOphours(e){
    const {name, value} = e.target
    setOphours((prevBody) => ({
      ...prevBody,
      [name]: value
    }))
    console.log(ophours)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    body.address = address
    body.ophours = ophours
    body.id = id
    console.log(body)
    props.addBusiness(body)
  }

  return (
    <div>
      <Button onClick={handleOpen}>Add Listing</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit} style={{width: "300px", margin: "20px auto", display: "flex", flexDirection: "column", gap: "5px"}}>
            <label>Name:</label>
            <input type="text" name="name" onChange={handleChange} value={body.name}/>
            <label>Description:</label>
            <textarea type="text" name="description" onChange={handleChange} value={body.description}></textarea>
            <label>Address:</label>
            <input type="text" name="street" onChange={handleAddress} value={address.street} placeholder="Street"/>
            <input type="text" name="city" onChange={handleAddress} value={address.city} placeholder="City"/>
            <input type="text" name="state" onChange={handleAddress} value={address.state} placeholder="State"/>
            <input type="text" name="zip" onChange={handleAddress} value={address.zip} placeholder="Zip Code"/>
            <input type="text" name="lat" onChange={handleAddress} value={address.lat} placeholder="Latitude"/>
            <input type="text" name="long" onChange={handleAddress} value={address.long} placeholder="Longitude"/>
            <label>Hours of Operation:</label>
            <input type="text" name="Monday" onChange={handleOphours} value={ophours.Monday} placeholder="Monday"/>
            <input type="text" name="Tuesday" onChange={handleOphours} value={ophours.Tuesday} placeholder="Tuesday"/>
            <input type="text" name="Wednesday" onChange={handleOphours} value={ophours.Wednesday} placeholder="Wednesday"/>
            <input type="text" name="Thursday" onChange={handleOphours} value={ophours.Thursday} placeholder="Thursday"/>
            <input type="text" name="Friday" onChange={handleOphours} value={ophours.Friday} placeholder="Friday"/>
            <input type="text" name="Saturday" onChange={handleOphours} value={ophours.Saturday} placeholder="Saturday"/>
            <input type="text" name="Sunday" onChange={handleOphours} value={ophours.Sunday} placeholder="Sunday"/>

            <input type="submit"></input>
          </form>
        </Box>
      </Modal>
    </div>
  );
}