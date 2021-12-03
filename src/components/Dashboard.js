import React from 'react'
import {
    Container,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { useEffect } from 'react'
import AddBusiness from '../containers/AddBusiness'

 
const Dashboard = (props) => {

  useEffect(()=>{
  },[])

    return (
        <Container maxWidth="lg" className="car-container">
            <div className="flex-container">
              <AddBusiness />
            </div>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Address</TableCell>
                        <TableCell>Hours</TableCell>
                        <TableCell>Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {props.businesses.map((biz, idx) => (
                    <TableRow key={idx}>
                        <TableCell component="th" scope="row">
                            {biz.id}
                        </TableCell>
                        <TableCell>{biz["name"]}</TableCell>
                        <TableCell>{biz["description"]}</TableCell>
                        <TableCell>{biz["address"].street + " " + biz["address"].city + " " + biz["address"].state}</TableCell>
                        <TableCell>{biz["ophours"].Monday}</TableCell>
                        <TableCell>
                            <DeleteIcon
                                // add onClick method here
                                onClick={() => props.removeBusiness(idx)}
                                className="icon text-red" />
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </Container>
    )
}

export default Dashboard