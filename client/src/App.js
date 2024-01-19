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
    
      fetch('/api/getRoute',requestCredentials)
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
        {name != null ?  name.data : null }
    </div>
  );
}

export default App;
