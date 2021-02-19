import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
export default function Publish({questions}) {
    const showForm=(values)=>{

        return(
            values.map((val,index)=>{
                return <li key={index}>{val.value}</li>
            }))
       
           
    }

    return (
        <div className="div">
            <h1>Survey Questions</h1>
            
            {
               
                questions.map((question, index)=>
                {return(<div key={index}>
                    <p ><strong>{question.que} </strong>  <em>{question.type}</em></p>
                    <ul>
                   {
                   showForm(question.values)}
                   </ul>
               </div>) })
           
            
            }
       <Link to="/createSurvey/publish/confirm"> <button className="button">Confirm</button> </Link>
        </div>
    )
}
