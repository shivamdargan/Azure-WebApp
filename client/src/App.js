import { useEffect, useState } from "react";

function App() {

  const [name,setName] = useState();
  
    useEffect(() => {
      const requestCredentials = {
        method:"GET",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Cache': 'no-cache'
        },
        credentials: 'include'
      };
    
      fetch('/api/getTask2',requestCredentials)
      .then(async response => {
          if(response.ok){
              
              response.json().then(data => {
                console.log(data);
                setName(data)
              });
           }
          else{
              throw response.json();
          }
        })
    
    },[])


  return (
    <div className="App">
      {/* {console.log( name.dta.recordset[0])}; */}
        {name != null ?  name.recordset[0].CompanyName : null }
    </div>
  );
}

export default App;
