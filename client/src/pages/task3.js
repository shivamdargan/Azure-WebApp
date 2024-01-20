import Navbar from "../components/Navbar";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { useState,useEffect } from "react";

const Task3 = () => {

    const [rows,setRows] = useState([{
        Name:"Loading...",
        Color:"Loading...",
        Size:"Loading...",
        Weight:"Loading..."
    }]);

      const callQuery = async () => {
        const requestCredentials = {
            method:"GET",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Cache': 'no-cache'
            },
            credentials: 'include'
          };
        
          fetch('http://localhost:5000/api/getTask3',requestCredentials)
          .then(async response   => {
              if(response.ok){
                  
                  response.json().then(data => {
                    console.log(data);
                    setRows(data.recordset)
                  });
               }
              else{
                  throw response.json();
              }
            })
        }

    
    
      useEffect(() => {
        callQuery();
      },[])
    

  return (
    <>
    <Navbar></Navbar>
    <h2>Query 3 Results: </h2>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell><b>Prouct Name</b></TableCell>
                <TableCell align="right"><b>Color</b></TableCell>
                <TableCell align="right"><b>Size</b></TableCell>
                <TableCell align="right"><b>Weight</b></TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <TableRow
                key={row.Name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell component="th" scope="row">
                    {row.Name}
                </TableCell>
                <TableCell align="right">{row.Color}</TableCell>
                <TableCell align="right">{row.Size}</TableCell>
                <TableCell align="right">{row.Weight}</TableCell>   
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    </>
  );

    };
    
    export default Task3;