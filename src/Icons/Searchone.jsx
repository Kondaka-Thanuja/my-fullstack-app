import React from "react";
import './Searchone.css';
import { useNavigate } from "react-router-dom"; // import hook
// import Upgrade from "./Upgrade"; // you don’t need to import Upgrade here

const Searchone = () => {
    const navigate = useNavigate(); // get navigate function

    const handleUpgrade = () => {
        navigate('/upgrade'); // navigate to Upgrade page
    }

    return (
        <div className="search-panel-content">
            <div>
                <h2 className="heading">Search</h2>
                <h3>Fast answers to everyday questions</h3>
                <hr/>
            </div>
            
            <div>
                <h3>Try Pro Search</h3>
                <h4>Advanced Search with 10X the sources; Powered by top models</h4>
            </div>

            <div>
                <button onClick={handleUpgrade}>Upgrade to Pro</button>
            </div>
        </div>
    );
}

export default Searchone;
