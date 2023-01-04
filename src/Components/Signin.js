import React, { useState } from 'react'; 
import axios from 'axios';

import { useNavigate } from "react-router-dom";

//props
const Signin = () => {
  var user
 const [email, setEmail]=useState('')
 const [password, setPassword]=useState('')
 const [error, setError]=useState('')

 const handleEmail=(e)=>{
  setEmail(e.target.value)
 }
 const handlePassword=(e)=>{
  setPassword(e.target.value)
 }
//  const handleError=(e)=>{
//   setError(e.target.value)
//  }

const handleApi=(e)=>{
//console.log(email,password)
e.preventDefault();
axios.post("http://localhost:3000/api/utilizatori/signin",{
  email:email,
  parola:password
})
.then(res=>{
  user=res.data
  navigate("/activities",{state:{data:user}})
})
.catch(err=>{
  setError(err)
  console.log(error.response.data)
})
}  
  const navigate = useNavigate();
  return(
            <div className="SignIn">
                <h1>Inregistreaza-te!</h1>
                <form onSubmit={handleApi}>
                    <label>
                      <p>Email</p>
                      <input
                        type="email"
                        name="email"
                        placeholder="@stud.ase.ro / @ie.ase.ro"
                        onChange={handleEmail} 
                      />
                    </label>
                    <label>
                      <p>Parola</p>
                      <input 
                        type="password"
                        name="password"
                        placeholder="********"
                        onChange={handlePassword} 
                      />
                    </label>
                  <div className="submitForm">
                  {
                      error?
                      <div className='errorPost'>
                        <label>Conectare esuata. Incearca din nou!</label>
                        <label>{Object.values(error.response.data)}</label>
                      </div>
                      :""
                    }
                      <button type="submit" >Intra in cont</button>
                  </div>
                </form>
                <button type="button" onClick={() => navigate("/")}>Inapoi</button>
                </div>
        )
}

export default Signin;
