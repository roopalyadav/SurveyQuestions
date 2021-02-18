import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import './index.css';

export default function Home() {
    
    return (
        <div>
            <img src="https://st2.depositphotos.com/5333766/8709/v/600/depositphotos_87099960-stock-illustration-paw-print-vector-illustration.jpg" alt="Tiger survey"/>
            <h1 >Survey Tiger</h1>
            <div><Link to="/createSurvey"><button className="button">CreateSurvey</button></Link></div>
            <div><Link to="/takeSurvey"><button className="button">TakeSurvey</button></Link></div>
        </div>
    )
}
