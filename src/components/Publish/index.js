import React from 'react';
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
            { console.log(questions)}
            {
               
                questions.map((question, index)=>
                {return(<div key={index}>
                    <p > {question.que}</p>
                    <ul>
                   {
                   showForm(question.values)}
                   </ul>
               </div>) })
            }
        </div>
    )
}
