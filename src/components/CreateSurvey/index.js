import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

export default function CreateSurvey({ questions, setQuestions }) {
  const [questionType, setQuestionType] = useState(0);
  const [questionIs, setQuestionIs] = useState("");
  const [values, setValues] = useState([{ value: "" }]);

  // const[questions, setQuestions]=useState([{que:"", values:[]}]);
  const handleChange = (e) => {
    setQuestionType(e.target.value);
    console.log(e.target.value);
  };

  const renderQuestionType = () => {
    if (questionType == 1) {
      return handleMultipleQuestions();
    }
  };
  const handleOnChange = (e) => {
    setQuestionIs(e.target.value);
  };
  const handleOnInput = (index, e) => {
    console.log(questions.length);
    const v = [...values];
    v[index][e.target.name] = e.target.value;
    setValues(v);
  };
  const handleAddMore = () => {
    setValues([...values, { value: "" }]);
  };
  const handleDelete = (index) => {
    const v = [...values];
    v.splice(index, 1);
    setValues(v);
  };

  const handlePublish = () => {
    const v = [...questions];
    v[questions.length - 1].que = questionIs;
    v[questions.length - 1].values = values;
    setQuestions([...v, { que: "", values: [] }]);
    setQuestionIs("");
    setValues([{ value: "" }]);
  };

  const handleAnotherQuestion = () => {
    const v = [...questions];
    v[questions.length - 1].que = questionIs;
    v[questions.length - 1].values = values;
    setQuestions([...v, { que: "", values: [] }]);
    setQuestionIs("");
    setValues([{ value: "" }]);
    console.log(questions);
  };

  const handleMultipleQuestions = () => {
    return (
      <div>
        <div style={{ marginBottom: "20px" }}>
          {" "}
          <input
            type="text-box"
            placeholder="Type Question"
            className="question"
            onChange={handleOnChange}
          ></input>
        </div>
        {console.log(questions)}
        {values.map((inputField, index) => {
          return (
            <div style={{ marginBottom: "3px" }} key={index}>
              <input
                type="text-box"
                name="value"
                placeholder="options"
                className="question"
                style={{ marginTop: "2px" }}
                onInput={(e) => handleOnInput(index, e)}
              ></input>
              <button className="btn" onClick={handleAddMore}>
                +
              </button>
              <button className="btn" onClick={() => handleDelete(index)}>
                -
              </button>
            </div>
          );
        })}

        <button className="button" onClick={handleAnotherQuestion}>
          Another Question
        </button>
        <Link to="/createSurvey/publish">
         
          <button className="button" onClick={handlePublish}>
            Publish
          </button>
        </Link>
      </div>
    );
  };
  return (
    <div>
      <h3>Select Question type</h3>
      <select id="dropdown" value={questionType} onChange={handleChange}>
        <option value={0}>None</option>
        <option value={1}>Multi Select</option>
        <option value={2}>Single Select</option>
      </select>
      {renderQuestionType()}
    </div>
  );
}
