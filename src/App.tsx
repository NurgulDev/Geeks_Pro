import axios from "axios";
import React, { useEffect, useState } from "react";

const App: React.FC = () => {
  const [data , setData] = useState([]);
  async function create() {
    try {
      let result = await axios.get("https://pokeapi.co/api/v2/pokemon/");
      setData(result.data.results);
    } catch (error) {
      console.log("error");
    }
  }

  useEffect(()=> {
    create()
  }, [])
  return <div >
   <div style={{display:"flex" , alignItems:"center" , justifyContent:"center" , flexWrap:"wrap", margin:'5pc'}} className="container">
   {
      data?.map((el:any) => (
       <>
       <div style={{width:"400px", height:"150px", background:" rgb(61, 139, 212)", margin:"1pc", borderRadius:"20px", display:"flex", alignItems:"center", justifyContent:'space-between', padding:"1pc"}} className="card">
        <img src={el.url} alt="image" />
        <h1>{el.name}</h1>
       </div>
       </>
      ))
    }
   </div>
  </div>;
};

export default App;
