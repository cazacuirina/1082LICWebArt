import React from 'react'; 
import { useNavigate, useLocation } from "react-router-dom"
import { useState } from 'react';
import axios from 'axios';
//import Moment from 'moment-timezone'

function AddActiv(){
  const { state } = useLocation();
  var user=state.data
  const [denumire, setDenumire]=useState('')
  const [data, setData]=useState('')
  const [descriere, setDescriere]=useState('')
  const [durata, setDurata]=useState('')
  const [codAcces, setCodAcces]=useState('')
  const [error, setError]=useState('')

  const navigate = useNavigate();

  const handleDenumire=(e)=>{
    setDenumire(e.target.value)
   }
   const handleDescriere=(e)=>{
    setDescriere(e.target.value)
   }
   const handleData=(e)=>{
    setData(e.target.value)
   }
   const handleDurata=(e)=>{
    setDurata(e.target.value)
   }
   const handleCodAcces=(e)=>{
    setCodAcces(e.target.value)
   }

   var activitate

   const handleApi=(e)=>{
    e.preventDefault();

    const url=`http://localhost:3000/api/activitati/creare/prof/${user.id}`
    console.log(url)

    axios.post(url,{
      denumire:denumire,
      descriere:descriere,
      data:data,//format moment
      durata:durata,
      codAcces:codAcces
    })
    .then(res=>{
      activitate=res.data
      console.log(activitate)
      navigate("/activities",{state:{data:user}})
    })
    .catch(err=>{
      setError(err)
      //console.log(error.response.data)
      console.log(error.response.data)
    })
    }  

    return(
        <div className="AddActivity">
            <h1>Adauga o activitate</h1>
            <form onSubmit={handleApi}>
                <label>
                  <p>Denumire</p>
                  <input
                    type="text"
                    name="denumire"
                    placeholder="enter activity name"
                    onChange={handleDenumire} 
                  />
                </label>
                <label>
                  <p>Descriere</p>
                  <input
                    type="text"
                    name="descriere"
                    placeholder="enter activity description"
                    onChange={handleDescriere} 
                  />
                </label>
                <label>
                  <p>Data</p>
                  <input 
                    type="datetime-local"
                    name="data"
                    placeholder="enter a date"
                    onChange={handleData} 
                  />
                </label>
                <label>
                  <p>Durata</p>
                  <input 
                    type="numeric"
                    name="durata"
                    placeholder="enter a duration (minutes)"
                    onChange={handleDurata} 
                  />
                </label>
                <label>
                  <p>Cod Acces</p>
                  <input
                    type="text"
                    name="codacces"
                    placeholder="enter activity access code"
                    onChange={handleCodAcces} 
                  />
            </label>
            <div className="submitForm">
            {
              error?
              <div>
                <label>Creare activitate esuata. Incearca din nou!</label>
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

export default AddActiv