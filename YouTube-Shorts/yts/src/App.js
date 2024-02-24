import { useState,useEffect } from 'react';
import './App.css';
import Video from './Component/Video';
import videos from './Component/Videos';

function App() {
 const [video,setVideo]=useState([]);
      useEffect(()=>{
          setVideo(videos);
      },[]);
 return (
    <div className="App">
        <div className="app_video"> 
         {
           videos.map((vid)=>(
           <Video id={vid.id} src={vid.url} /> 
           ))} 
        
        </div>
    </div>
  );
}

export default App;
