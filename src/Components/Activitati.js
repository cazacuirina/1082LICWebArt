import React from 'react'; 
import '../Styles/Activitati.css'

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
  var color
if(user.tip===false){
  path="/activities/enroll"
  color="#e8fcfe"
  url=`http://localhost:3000/api/participanti/activitati/stud/${state.data.id}`
}
else{
  path="/activities/add"
  color="#cffecc"
  url=`http://localhost:3000/api/utilizatori/activitati/prof/${state.data.id}`
}

  useEffect(() => {
    axios.get(url)
        .then(res=>{
          setLista(res.data)
          //  console.log("Load",listaActivitati)
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
        <div className='activitati' style={{backgroundColor: color}}>
          <h1>Buna, {state.data.nume}!</h1>
          <button onClick={add}>Adauga</button>
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
       
    )
}

export default Activitati

    // const getData = async () => {
    //   const data = await axios.get(url)
    //   console.log(data.data)
    //   setLista(data.data)
    // };
    // getData();


// useEffect(()=>{
//   axios.get(url)
//   .then(res=>{
//     setLista(res.data)
//     console.log(lista)
//   })
//   .catch(err=>{
//     console.log(err)
//   })
// }, [])

//import {QueryClient, QueryClientProvider, useQuery} from 'react-query'

// const queryClient =new QueryClient()
// // const incarcaActiv=()=>{
//   const{activitati, loading}=useQuery("activitati",()=>{
//     return axios.get(url)
//   })
//   if(loading){
//     return <h1>Loading activities...</h1>
//   }
// }

    // <QueryClientProvider client={queryClient}>

/* {
              activitati.length>0?
              activitati.map((e)=>
             (<div className="activitatileMele" key={e.id}>
                <h1 onClick={() => navigate("/activities/activity",{state:{data:e.denumire}})}>{e.denumire}</h1>
                <h3 >Data:{Moment(e.data).format("MMM Do YYYY")}</h3>
                <h4 >Durata: {e.durata} minute</h4>
                <h4 >{e.descriere}</h4>
              </div>
             )
             ):<h1>Bine ai venit! Adauga o activitate</h1>
             } */