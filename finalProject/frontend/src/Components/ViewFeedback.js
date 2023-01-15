import React from 'react'; 
import axios from 'axios';
import { useState, useEffect } from 'react';
import Moment from 'moment';
import '../Styles/ViewFeedback.css'

function View(props){
    const activitate = props.activitate
    const stare = props.stare
    console.log("PROPS", stare,activitate)

    const [happyArray, setHappy]=useState([])
    const [surprisedArray, setSurprised]=useState([])
    const [confusedArray, setConfused]=useState([])
    const [frownyArray, setFrowny]=useState([])
    const [error, setError]=useState([])

    const url=`http://localhost:3000/api/feedback/activ/${activitate.id}/count`
    const getData = async () => {
        const data = await axios.get(url)
        .then(res=>{
            console.log("Rez",res.data)
            setHappy(Object.values(res.data)[0].reverse())
            setSurprised(Object.values(res.data)[1].reverse())
            setConfused(Object.values(res.data)[2].reverse())
            setFrowny(Object.values(res.data)[3].reverse())
          })
          .catch(err=>{
            setError(err)
            console.log(error)
          })
      };

        useEffect(() => {
            console.log("AICI",stare)
            if(stare==='desfasurare'){
                const interval = setInterval(() => {
                    getData()
            },2000) 
        }
            else{
            if(stare==='finalizata'){
                  getData();
            }}
          }, [])
         console.log(happyArray)

        return(
            <div className='viewFeedback'>
                    <div className='feedback'>
                        <img src='/happy.png' alt='happy'></img>
                        <label>Reactii fericite</label>
                        {                  
                          Object.values(happyArray).map((e)=>(
                            <div className="fb" key={e.dataOra}>
                              <h5>Ora: {Moment(e.dataOra).format("hh:mm A")}</h5>
                              <h5>Nr reactii: {e.count}</h5>
                            </div>
                          ))
                        }
                    </div>
                    <div className='feedback'>
                        <img src='/surprised.png' alt='surprised'></img>
                        <label>Reactii surprinse</label>
                        {
                          Object.values(surprisedArray).map((e)=>(
                            <div className="fb" key={e.dataOra}>
                              <h5>Ora: {Moment(e.dataOra).format("hh:mm A")}</h5>
                              <h5>Nr reactii: {e.count}</h5>
                            </div>
                          ))
                        }
                    </div>
                    <div className='feedback'>
                        <img src='/confused.png' alt='confused'></img>
                        <label>Reactii confuze</label>
                        {
                          Object.values(confusedArray).map((e)=>(
                            <div className="fb" key={e.dataOra}>
                              <h5>Ora: {Moment(e.dataOra).format("hh:mm A")}</h5>
                              <h5> Nr reactii: {e.count}</h5>
                            </div>
                          ))
                        }
                    </div>
                    <div className='feedback'>
                        <img src='/frowny.png' alt='frowny'></img>
                        <label>Reactii furioase</label>
                        {
                          Object.values(frownyArray).map((e)=>(
                            <div className="fb" key={e.dataOra}>
                              <h5>Ora: {Moment(e.dataOra).format("hh:mm A")}</h5>
                              <h5>Nr reactii: {e.count}</h5>
                            </div>
                          ))
                        }
                    </div>
            </div>
        )
}

export default View