import React from 'react'; 
import { useNavigate } from "react-router-dom";
function Btn() {
    const navigate = useNavigate();
    return(
        <div className="Btn">
            <label>Salut!</label>
            <p>Aceasta este o aplicatie de acordare a feedback-ului continuu</p>
            <button onClick={() => navigate("/signin")}>Sign in</button>
            <button onClick={() => navigate("/signup")}>Sign up</button>
        </div>
    )
  }

  export default Btn;