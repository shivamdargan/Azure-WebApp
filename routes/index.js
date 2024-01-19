var express = require('express');
var router = express.Router();

const sql = require('mssql');

const sqlConfig = {
  user: 'bootcamp',
  password:'Pass@123',
  database: 'jan15bootcampdb',
  server: 'jan15bootcampserver.database.windows.net',
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: true, // for azure
    trustServerCertificate: false // change to true for local dev / self-signed certs
  }
}


/* GET Task 2. */
router.get('/getTask2', async (req, res) => {
  try{
  
       // make sure that any items are correctly URL encoded in the connection string
       await sql.connect(sqlConfig)
       const result = await sql.query`SELECT TOP 20 * FROM SalesLT.Customer`
       console.log(result);
       res.send(result);
    
  }catch(e){
    console.log(e);
      res.status(400).send()
  }
})  


/* GET Task 2. */
router.get('/getTask3', async (req, res) => {
  try{
  
       // make sure that any items are correctly URL encoded in the connection string
       await sql.connect(sqlConfig)
       const result = await sql.query`SELECT p.Name, p.Color, p.Size, p.Weight FROM [SalesLT].[ProductCategory] AS pc JOIN [SalesLT].[Product] AS p ON pc.ProductCategoryID = p.ProductCategoryID`
       console.log(result);
       res.send(result);
    
  }catch(e){
    console.log(e);
      res.status(400).send()
  }
})  

module.exports = router;