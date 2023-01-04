import React from 'react'; 
import axios from 'axios';
import { useState, useEffect } from 'react';
import Moment from 'moment';
import '../Styles/ViewFeedback.css'

function ViewFeedback(props){
    const activitate = props.activitate
    const stare = props.stare
    //const user = props.user
    console.log("PROPS", stare,activitate.id)//user

    const [listaFeedback, setLista]=useState([])

    const url=`http://localhost:3000/api/feedback/activ/${activitate.id}/count`
    const getData = async () => {
      console.log("AICI")
        console.log(url)
        axios.get(url)
        .then(res=>{
          setLista(res.data)
        })
        .catch(err=>{
          console.log(err)
        })
        console.log("Lista2", listaFeedback)
      };
      
      useEffect(() => {
        console.log("AICI",stare)
        if(stare==='desfasurare'){
        // const interval = setInterval(() => {
        //     const getData = async () => {
        //   const data = await axios.get(url)
        //   .then(res=>{
        //     setLista(res.data)
        //     console.log("Rez",res.data)
        //   })
        //   .catch(err=>{
        //     console.log(err)
        //   })
        // };
        // getData()
        //}, 2000); //un minut = 60*1000
      //     return () => clearInterval(interval); 
        }
        
        else{
        if(stare==='finalizata'){
            const getData = async () => {
                const data = await axios.get(url)
                .then(res=>{
                  setLista(res.data)
                  console.log("Rez",res.data)
                })
                .catch(err=>{
                  console.log(err)
                })
              };
              getData()
        }
        }
      }, [])

      //POTI DECOMENTA
  //   useEffect(() => {
  //       if(stare==='desfasurare')
  //     {
  //       const interval = setInterval(() => {
  //       getData()
  //       console.log("Lista", listaFeedback)
  //     }, 2000); //un minut = 60*1000
  //     return () => clearInterval(interval); 

  //   }else{
  //       getData()
  //  }
  //   }, [])
    console.log("Lista1", listaFeedback)//ok aici

    return(
        <div className='viewFeedback'>
                <div className='feedback'>
                    <img src='/happy.png' alt='happy'></img>
                    <label>happy reactions count </label>
                    {
                      //<label>{Object.values(listaFeedback.happy)[0]}</label>
                      
                      // listaFeedback.happy.map((e)=>(
                      //   <div className="fb" key={e.dataOra}>
                      //     <h5>Timestamp: {Moment(e.dataOra).format("hh:mm A")}</h5>
                      //     <h5>Reactii: {e.count}</h5>
                      //   </div>
                      // ))
                    }
                </div>
                <div className='feedback'>
                    <img src='/surprised.png' alt='surprised'></img>
                    <label>surprised reactions count </label>
                    {
                      // listaFeedback.surprised.map((e)=>(
                      //   <div className="fb" key={e.dataOra}>
                      //     <h5>Timestamp: {Moment(e.dataOra).format("hh:mm A")}</h5>
                      //     <h5>Reactii: {e.count}</h5>
                      //   </div>
                      // ))
                    }
                </div>
                <div className='feedback'>
                    <img src='/confused.png' alt='confused'></img>
                    <label>confused reactions count </label>
                    {
                      // listaFeedback.confused.map((e)=>(
                      //   <div className="fb" key={e.dataOra}>
                      //     <h5>Timestamp: {Moment(e.dataOra).format("hh:mm A")}</h5>
                      //     <h5>Reactii: {e.count}</h5>
                      //   </div>
                      // ))
                    }
                </div>
                <div className='feedback'>
                    <img src='/frowny.png' alt='frowny'></img>
                    <label>frowny reactions count </label>
                    {
                      // listaFeedback.frowny.map((e)=>(
                      //   <div className="fb" key={e.dataOra}>
                      //     <h5>Timestamp: {Moment(e.dataOra).format("hh:mm A")}</h5>
                      //     <h5>Reactii: {e.count}</h5>
                      //   </div>
                      // ))
                    }
                </div>
        </div>
    )
}

export default ViewFeedback