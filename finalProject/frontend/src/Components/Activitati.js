import React from 'react'; 
import '../Styles/Activitati.css';
import background1 from '../Styles/stud.jpg';
import background2 from '../Styles/teacher.jpg';

import { useNavigate, useLocation } from "react-router-dom"
import { useState, useEffect } from 'react';
import axios from 'axios';
import Moment from 'moment';

function Activitati(){
  const { state } = useLocation();
  var user=state.data
  console.log(user)
  const [listaActivitati, setLista]=useState([])

  var url
  var path
  var image
if(user.tip===false){
  path="/activities/enroll"
  image=background1
  url=`http://localhost:3000/api/participanti/activitati/stud/${state.data.id}`
}
else{
  path="/activities/add"
  image=background2
  url=`http://localhost:3000/api/utilizatori/activitati/prof/${state.data.id}`
}

  useEffect(() => {
    axios.get(url)
        .then(res=>{
          setLista(res.data)
        })
        .catch(err=>{
          console.log(err)
        })
  }, []);

const navigate = useNavigate();
const add=()=>{
  console.log(user.tip)
  navigate(path,{state:{data:user}})
}

    return(
      <div className='bg' style={{backgroundImage: `url(${image})`}}>
        <div className='activitati'>
          <h1>Buna, {state.data.nume}!</h1>
          <button id="btn1" onClick={add}>Adauga</button>
          <div className='act'>
              {
                listaActivitati.length>0?
                listaActivitati.map((e)=>
              (<div className="activitatileMele" key={e.id}>
                  <h2 onClick={() => navigate("/activities/activity",{state:{data:{activitate:e.id, user:user}}})}>{e.denumire}</h2>
                  <h3 >Data:{Moment(e.data).format("MMM Do YYYY")}</h3>
                  <h4 >Durata: {e.durata} minute</h4>
                  <h4 >{e.descriere}</h4>
                </div>
              )
              ):<h1>Bine ai venit! Adauga o activitate</h1>
              }
             </div>
        </div>
      </div>
    )
}

export default Activitati

  