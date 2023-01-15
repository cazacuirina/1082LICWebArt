import React, { useState } from 'react'; 
import axios from 'axios';
import '../Styles/Signin.css'

import { useNavigate, useLocation } from "react-router-dom";

const Signinup = () => {
    const { state } = useLocation();
    var option=state.data

  var user
  const [name, setName]=useState('')
 const [email, setEmail]=useState('')
 const [password, setPassword]=useState('')
 const [error, setError]=useState('')

 const handleName=(e)=>{
    setName(e.target.value)
   }
 const handleEmail=(e)=>{
  setEmail(e.target.value)
 }
 const handlePassword=(e)=>{
  setPassword(e.target.value)
 }

const handleApi=(e)=>{
e.preventDefault();
if(option==="in")
{axios.post("http://localhost:3000/api/utilizatori/signin",{
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
else{
    axios.post("http://localhost:3000/api/utilizatori/signup",{
      nume:name,
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
}  

  const navigate = useNavigate();
  return(
            <div className="SignInUp">
                <h1>Inregistreaza-te!</h1>
                <form onSubmit={handleApi}>
                    {
                        option==="up"?
                        <label className="nume">
                        Nume
                        <input
                            type="text"
                            name="name"
                            placeholder="Ion Popescu"
                            onChange={handleName} 
                        />
                        <p> </p>
                        </label>:''
                        
                    }
                    <label className="email">
                      Email
                      <input
                        name="email"
                        placeholder="@stud.ase.ro / @ie.ase.ro"
                        onChange={handleEmail} 
                      /><p> </p>
                    </label>
                    <label className="parola">
                      Parola
                      <input 
                        type="password"
                        name="password"
                        placeholder="********"
                        onChange={handlePassword} 
                      /><p> </p>
                    </label>
                  <div className="submitForm">
                  {
                      error?
                      <div className='errorPost'>
                        {
                            option==="in"?
                            <label>Conectare esuata. Incearca din nou!</label>:
                            <label>Creare cont esuata. Incearca din nou!</label>
                        }
                        <label>{Object.values(error.response.data)}</label>
                      </div>
                      :""
                    }
                    {
                        option==="in"?
                      <button id = "btn1" type="submit" >Intra in cont</button>
                      :<button id = "btn1" type="submit">Creeaza cont</button>
                    }
                  </div>
                </form>
                </div>
        )
}

export default Signinup;
