import React from 'react'; 
import axios from 'axios';
import { useLocation } from "react-router-dom"
import { useState, useEffect } from 'react';
import Moment from 'moment';

import AddFeedback from './AddFeedback';
import ViewFeedback from './ViewFeedback';

function Activitate(){
    const { state } = useLocation();
    var idActivitate=state.data.activitate
    var user=state.data.user
    const url=`http://localhost:3000/api/activitati/${idActivitate}`
    const [activitate, setActivitate]=useState({})
    const [stareActiv, setStare]=useState('')
    //console.log(state.data)

    useEffect(()=>{
        axios.get(url)
        .then(res=>{
           setActivitate(res.data.data)
           setStare(res.data.message)
           console.log("Load",res.data.data,res.data.message)
           console.log("ACT",activitate,stareActiv)
        })
        .catch(err=>{
          console.log(err)
        })
    },[])
   // console.log(activitate)
    
   const [isShown, setIsShown] = useState(false);
   const handleClick=()=>{
    setIsShown(true)
   }

    return(
        <div className='activitate'>
            <h1>{activitate.denumire}</h1>
            <h2>Scurta descriere: {activitate.descriere}</h2>
            <h3>Data: {Moment(activitate.data).format("DD/MM/yyyy")}</h3>
            <h3>Ora: {Moment(activitate.data).format("hh:mm A")}</h3>
            <h4>Durata: {activitate.durata} minute</h4>
            <h4>Stadiul desfasurarii: {stareActiv}</h4> 
            {/* {
                //stareActiv==="desfasurare"?
                    user.tip===false?<AddFeedback stare={stareActiv} activitate={activitate} user={user}/>:<ViewFeedback stare={stareActiv} activitate={activitate} user={user}/>
                //:<div>ACTIVITATEA NU E DESCHISA</div>
            } */}
            {
                //vezi stare activ si tip user!!!
                stareActiv!=="urmeaza"?
                    user.tip===false?
                        <button onClick={handleClick}>{stareActiv==="desfasurare"?"Acorda feedback":"Vizualizeaza feedback"}</button>
                        :<button onClick={handleClick}>Vizualizeaza feedback</button>
                :<div>Activitatea nu este deschisa momentan. Va rugam sa asteptati!</div>
            }
            {isShown &&!user.tip&& <AddFeedback stare={stareActiv} activitate={activitate} user={user}/>}
            {isShown &&user.tip&& <ViewFeedback stare={stareActiv} activitate={activitate} />
            //user={user} pt VIEW????
            } 
        </div>
    )
}

export default Activitate