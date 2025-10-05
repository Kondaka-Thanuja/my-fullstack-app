import React from "react"
import './Education.css'

const Education=()=>{
    return(
        <div  className="main">
            <div>
                <h1 className="h1">Education Pro</h1>
                <h1 className="h1">Redeem free Pro</h1>
                <h4 className="h4">No credit card required,auto-downgrade to free</h4>
                <h4 className="h4">Verify your student or education status ,Refer to earn more free pro</h4>
            </div>
            <div>
                <button className="btn">Verify as Student</button>
                <h1>Verify as educator </h1>
            </div>
            <div>
                <ul className="list">
                    <li>Unlock free pro</li>
                    <li>Access to Comet, the agentic browser</li>
                    <li>Access to Studey Mode for interactive flashcards and quizzes</li>
                    <li>10x as many citations in answers</li>
                    <li>Access to perplexity Labs</li>
                    <li>Unlimitaed file and photo uploads</li>
                    <li>Extended access to Perplexity Research</li>
                    <li>One subscription for all the latest Al models includeing GPT-5 and claude sonnet $</li>
                    <li>$5.00 in Api credits</li>
                </ul>
            </div>
        </div>     
    );

}
export default Education