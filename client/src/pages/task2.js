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

const Task2 = () => {

    const [rows,setRows] = useState([{
        CompanyName:"Loading...",
        CustomerID:"Loading...",
        EmailAddress:"Loading...",
        FirstName:"Loading...",
        LastName:"Loading...",
        MiddleName:"Loading...",
        Phone:"Loading...",
        SalesPerson:"Loading..."
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
        
          fetch('http://localhost:5000/api/getTask2',requestCredentials)
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
    <h2>Query 2 Results: </h2>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell><b>Company Name</b></TableCell>
                <TableCell align="right"><b>CustomerID</b></TableCell>
                <TableCell align="right"><b>Email Address</b></TableCell>
                <TableCell align="right"><b>First Name</b></TableCell>
                <TableCell align="right"><b>Last Name</b></TableCell>
                <TableCell align="right"><b>Middle Name</b></TableCell>
                <TableCell align="right"><b>Phone</b></TableCell>
                <TableCell align="right"><b>Sales Person</b></TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <TableRow
                key={row.CompanyName}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell component="th" scope="row">
                    {row.CompanyName}
                </TableCell>
                <TableCell align="right">{row.CustomerID}</TableCell>
                <TableCell align="right">{row.EmailAddress}</TableCell>
                <TableCell align="right">{row.FirstName}</TableCell>
                <TableCell align="right">{row.LastName}</TableCell>
                <TableCell align="right">{row.MiddleName}</TableCell>
                <TableCell align="right">{row.Phone}</TableCell>
                <TableCell align="right">{row.SalesPerson}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    </>
  );

    };
    
    export default Task2;