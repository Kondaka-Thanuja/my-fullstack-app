import React from "react";
import { useNavigate } from "react-router-dom";


const Research=()=>{
const navigate=useNavigate();
const handleupgrade=()=>{
    navigate('/reupgrade');
}
   return (
        <div className="search-panel-content">
            <div>
                <h2 className="heading">Research</h2>
                <h3>Deep research on any topic</h3>
                <hr/>
            </div>
            
            <div>
                <h3>Extended access for subscribers</h3>
                <h4>In-dept reports with more sources, charts,and advanced reasoning</h4>
            </div>
            <div>
                <button onClick={handleupgrade}>Upgrade to Pro</button>
            </div>
        </div>
    );


}
export default Research