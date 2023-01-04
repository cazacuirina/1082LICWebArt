import React from 'react'; 
import { useNavigate, useLocation } from "react-router-dom"
import { useState } from 'react';
import axios from 'axios';

function Enroll(){

  const { state } = useLocation();
  var user=state.data

  const [code, setCode]=useState('')
  const [error, setError]=useState('')

  const navigate = useNavigate();

  const handleCode=(e)=>{
    setCode(e.target.value)
   }

   var participant
   const handleApi=(e)=>{
    e.preventDefault();

    console.log(user)
    const url1=`http://localhost:3000/api/activitati/inrolare/stud/${user.id}/codActivitate/${code}`
  
    axios.post(url1)
    .then(res=>{
      participant=res.data
      console.log(participant)
      navigate("/activities/activity",{state:{data:{activitate:participant.activitatiId, user:user}}})
    })
    .catch(err=>{
      setError(err)
      console.log(error.response.data)
    })
    }  

    return(
        <div className='EnrollActivity'>
            <h1>Inroleaza-te la activitate</h1>
            <form onSubmit={handleApi}> 
                    <label>
                      <p>Cod Activitate</p>
                      <input
                        type="password"
                        name="code"
                        placeholder="enter activity access code"
                        onChange={handleCode} 
                      />
                    </label>
                    <div className="submitForm">
            {
              error?
              <div className='errorPost'>
                <label>Adaugare activitate esuata. Incearca din nou!</label>
                <label>{Object.values(error.response.data)}</label>
              </div>
              
              :""
            }
               <button type="submit" >Adauga</button>
            </div>
                </form>
                
        </div>
    )
}

export default Enroll