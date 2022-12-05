
import './App.css';
import Home from './components/Home';
import InstaLogin from './components/InstaLogin';
import UploadFile from './components/UploadFile';
import axios from 'axios';
import {useState,useEffect} from 'react'
function App() {
  // const[people,setPeople]=useState([]);
  // useEffect(()=>{
  //      axios.get('/api').then(res =>setPeople(res.data))
  // },[])
  
  return (
    <>
      <Home/>
      <InstaLogin/>
     
    </>
  )
  // return people.map((p,index)=>{
  //   return <p key={index}>{p.id}{p.name} {p.age}</p>,
  //   <Home/>,
  //   <InstaLogin/>
  // })
  // return people
}

export default App;
