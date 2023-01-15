import React from 'react'; 
import { useNavigate } from "react-router-dom";
import '../Styles/Btn.css'
function Btn() {
    const navigate = useNavigate();
    return(
        <div className="Btn">
            <h4>Salut!</h4>
            <p>Aceasta este o aplicatie de acordare a feedback-ului continuu</p>
            <button id= "btn1" onClick={() => navigate("/signin",{state:{data:"in"}})}><span>Sign in</span></button>
            <button id= "btn2" onClick={() => navigate("/signup", {state:{data:"up"}})}><span>Sign up</span></button>
        </div>
    )
  }

  export default Btn;