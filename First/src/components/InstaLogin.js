import './InstaLogin.css'
 
import React,{useState} from 'react'

import axios from 'axios';
 

 

function InstaLogin() {
  const url="https://dummy.restapiexample.com/api/v1/create"
  const [data, setData] = useState({
    email:"",
    password:""
  });
   
   

  const clickHandle = (e) => {
     const newdata={...data}
     newdata[e.target.id]=e.target.value 
     setData(newdata)
     console.log(newdata)
 };

 function  submit(e){
  e.preventDefault();
  axios.post(url,{
    email:data.email,
    password:data.password

  })
  .then(res=>{
    console.log(res.data)
  })
 }

  

  return (
    <div>
      <form onSubmit={(e)=>submit(e)}>
        <div class="login">
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
          <label for="emailid" class="form-label">Userid</label>
          <input type="email" class="form-control" id="emailid" onChange={(e)=>clickHandle(e)}   aria-describedby="emailHelp" />
          
           
        </div>
        <div class="login">
          <label for="emailpassword" class="form-label">Password</label>
          <input type="password" class="form-control" id="emailpassword" onChange={(e)=>clickHandle(e)} />
        </div>
        <button type="submit" class="btn"  onClick={clickHandle}>Submit</button>
      </form>
    </div>
  )
}

export default InstaLogin
