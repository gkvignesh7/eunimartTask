import React,{useState,useEffect} from 'react';
import './App.css';
import axios from 'axios'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
function Home() {
  const [data,setData]=useState([]);

  useEffect(()=>{
    const getData=async()=>{
      const res=await axios.get("https://reqres.in/api/users");
      setData(res.data.data);
    }
    getData();
  },[setData]);
  
  return (
    <div className="homepage">
      {data?.map((d)=>(
         
        <div key={d.id}>
        <div className="details row">
          <div className="col imageuser">
          <Link  to={`/users/${d.id}`}>
          <img src={d.avatar} alt="user-image" />
          </Link>
          </div>
          <div className="col">
          <p>First Name : {d.first_name}</p>
          <p>Last Name : {d.last_name}</p>
          <p>Email Id : {d.email}</p>
          </div>
        </div>
        <hr/>
        </div>
        
      ))}
    </div>
   
  );
}

export default Home;