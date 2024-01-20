import Navbar from "../components/Navbar";

const Task2 = () => {

    // const [name,setName] = useState();
    
    //   useEffect(() => {
    //     const requestCredentials = {
    //       method:"GET",
    //       headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json',
    //         'Cache': 'no-cache'
    //       },
    //       credentials: 'include'
    //     };
      
    //     fetch('/api/getTask2',requestCredentials)
    //     .then(async response => {
    //         if(response.ok){
                
    //             response.json().then(data => {
    //               console.log(data);
    //               setName(data)
    //             });
    //          }
    //         else{
    //             throw response.json();
    //         }
    //       })
      
    //   },[])

    return (
        <>
            <Navbar></Navbar>
            <h1>Task 2</h1>
        </>
    )
    };
    
    export default Task2;