import React from 'react'; 
import { useNavigate, useLocation } from "react-router-dom"
import { useState } from 'react';
import axios from 'axios';
import "../Styles/AddActiv.css"
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
      data:data,
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
      console.log(error.response.data)
    })
    }  

    return(
        <div className="AddActivity">
            <h1>Adauga o activitate</h1>
            <form onSubmit={handleApi}>
                <label className='den'>
                  Denumire
                  <input
                    type="text"
                    name="denumire"
                    placeholder="Test la Tech Web"
                    onChange={handleDenumire} 
                  /><p></p>
                </label>
                <label className='desc'>
                  Descriere
                  <input
                    type="text"
                    name="descriere"
                    placeholder="40% din nota"
                    onChange={handleDescriere} 
                  /><p></p>
                </label>
                <label className='data'>
                  Data
                  <input 
                    type="datetime-local"
                    name="data"
                    placeholder="01/16/2023 09:00 AM"
                    onChange={handleData} 
                  /><p></p>
                </label>
                <label className='dur'>
                  Durata
                  <input 
                    type="numeric"
                    name="durata"
                    placeholder="120"
                    onChange={handleDurata} 
                  /><p></p>
                </label>
                <label className='cod'>
                  Cod Acces
                  <input
                    type="text"
                    name="codacces"
                    placeholder="********"
                    onChange={handleCodAcces} 
                  /><p></p>
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
               <button id = "btn1" type="submit" >Adauga</button>
            </div>
           
            </form>
          </div>
    )
}

export default AddActiv