import React from 'react'; 
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom"
import Moment from 'moment';
import '../Styles/AddFeedback.css'

function AddFeedback(props){
    const activitate = props.activitate
    const stare = props.stare
    const user = props.user
    console.log("PROPS", stare,activitate,user)

   
    const [listaReactii, setLista]=useState({})
   const [cntH, setH]=useState(0) //happy
   const [cntS, setS]=useState(0)//surprised
   const [cntC, setC]=useState(0)//confused
   const [cntF, setF]=useState(0)//frown

    const [stareActiv, setStareActiv]=useState(true)
    const [error, setError]=useState([])
    const navigate = useNavigate();

    var feedback
    const handleClick=(e)=>{
        var reactie=e.currentTarget.id
        
        switch(reactie){
            case "1":setH(cntH+1) 
            break;
            case "2":setS(cntS+1)
            break;
            case "3":setC(cntC+1)
            break;
            case "4":setF(cntF+1)
            break;
        }
        console.log(activitate.id,user.id)
        const url1=`http://localhost:3000/api/feedback/activ/${activitate.id}/stud/${user.id}`
        console.log(url1)
      
        axios.post(url1,{
            reactie:reactie
        })
        .then(res=>{
          feedback=res.data
          console.log(feedback)
        })
        .catch(err=>{
          setError(err) 
          console.log(error)
        })
    }  

    
        const d1=Moment()
        const d2=Moment(activitate.data).add(activitate.durata, 'minutes')
        const dif=d2.diff(d1, 'milliseconds')
        //console.log(dif)

        useEffect(() => {
            console.log("AICI",stare)
            if(stare==='desfasurare'){
            setTimeout(() => {
                setStareActiv(false)
               navigate("/activities",{state:{data:user}})
               console.log(activitate, user)
            },dif) //testare(5000) vs dif
            }
            
            else{
            if(stare==='finalizata'){
                const getData = async () => {
                    const url2=`http://localhost:3000/api/feedback/activ/${activitate.id}/stud/${user.id}/count`
                    const data = await axios.get(url2)
                    .then(res=>{
                        setLista(res.data)
                        console.log("Rez",res.data)
                      })
                      .catch(err=>{
                        console.log(err)
                      })
                  };
                  getData();
            }
            }
          }, [])
        console.log(stareActiv)

    return(
        <div className='activState'>
            {
            <div className='addFeedback'>
                {/* <h2>{stare==="desfasurare"?"Acorda feedback!":"Activitatea a fost incheiata. Multumim pentru participare!"}</h2> */}
                <h2>Reactiile mele</h2>
                <div className='reaction'>
                    <button id="1" onClick={handleClick}><img src='/happy.png' alt='happy'></img></button>
                    <label>happy reactions count: {stare==="desfasurare"?cntH:Object.values(listaReactii)[0]}</label>
                </div>
                <div className='reaction'>
                    <button id="2" onClick={handleClick}><img src='/surprised.png' alt='surprised'></img></button>
                    <label>surprised reactions count: {stare==="desfasurare"?cntS:Object.values(listaReactii)[1]}</label>
                </div>
                <div className='reaction'>
                    <button id="3" onClick={handleClick}><img src='/confused.png' alt='confused'></img></button>
                    <label>confused reactions count: {stare==="desfasurare"?cntC:Object.values(listaReactii)[2]}</label>
                </div>
                <div className='reaction'>
                    <button id="4" onClick={handleClick}><img src='/frowny.png' alt='frowny'></img></button>
                    <label>frowny reactions count: {stare==="desfasurare"?cntF:Object.values(listaReactii)[3]}</label>
                </div> 
            </div>
            }       
        </div>
    )
}

export default AddFeedback