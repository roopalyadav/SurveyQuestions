import "./App.css";
import React,{useState}  from 'react';
import CreateSurvey from './components/CreateSurvey/';
import TakeSurvey from './components/TakeSurvey/';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Home from "./components/Home/";
import Publish from "./components/Publish/";


function App() {
  const[questions, setQuestions]=useState([{que:"", values:[]}]);
  // const[createSurveyQuestions, setCreateSurveyQuestions]=useState([]);
  return (
    <div className="App">
      
      
        <Router>
       
         
          <Route exact path="/createSurvey"><CreateSurvey questions={questions} setQuestions={setQuestions}/></Route>
          <Route exact path="/takeSurvey"><TakeSurvey/></Route>
          <Route exact path="/createSurvey/publish"><Publish questions={questions} /></Route>
          <Route exact path="/"><Home/></Route>
      
        </Router>

        
      
        
      
      {/* <div>
        <button className="button">Take Survey</button>
      </div> */}

      
    </div>
  );
}

export default App;
