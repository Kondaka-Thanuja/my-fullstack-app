import React from "react";
import './Labs.css'
import { useNavigate } from "react-router-dom";

const Labs=()=>{
const navigate=useNavigate();
const handleupgrade=()=>{
    navigate('/labsupgrade')
}
   return (
        <div className="search-panel-content">
            <div>
                <h2 className="heading">Labs</h2>
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
export default Labs