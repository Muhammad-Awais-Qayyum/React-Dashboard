import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Table.css'

function createData(name, trackingId, date, status) {

  
  return { name, trackingId, date, status };
}

const rows = [
  createData('Frozen yoghurt', 18908424, "2 March 2023", "Pending"),
  createData('Ice cream sandwich', 18908233, "2 March 2023", "Approved"),
  createData('Eclair', 18908421, "2 March 2023","Pending"),
  createData('Cupcake', 18908420, "2 March 2023", "Approved"),

];

const makeStyles=(status)=>{
  if (status==='Approved') {
    return{
      background:'rgb(145 254 159 /47%)',
      color:'green'
    }
  }
  else if(status==='Pending'){
    return{
      background:'#ffadad8f',
      color:'red'
    }
  }
  else{
    return{
      background:'#59bfff',
      color:'white'
    }
  }
}

export default function BasicTable() {
  return (
    <div className="Table">
      <h3>Recent Orders</h3>
    <TableContainer component={Paper} style={{boxShadow:'0px 13px  20px 0px #80808029',marginTop:'20px'}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell align="right">TrakingId</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.trackingId}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">
                <span className='status' style={makeStyles(row.status)}>{row.status}</span>
              </TableCell>
              <TableCell align="right" className='details'>Detail</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
