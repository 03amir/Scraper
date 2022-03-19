import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import Axios from 'axios';

function App() {


 const [urls, setUrls]= useState("")

function getLink(){
  Axios.post("http://localhost:3000/",{
    url:urls
  }).then((res)=>{
    setUrls(res.data)
  })
}














  return (
    <div className="App">

      <h2>welcoms</h2>
      <input type="text" placeholder="url" value={urls} onChange={(e)=>{
        setUrls(e.target.value)
      }}  />
      <button onClick={()=>{
        getLink()
      }}>find</button>


      <div className="card">
        <video src={urls}></video>
      </div>
     
    </div>
  );
}

export default App;
