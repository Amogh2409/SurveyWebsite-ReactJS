import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const initBasicData = JSON.parse(localStorage.getItem('data')) || {};
  const initQuestionsData = JSON.parse(localStorage.getItem('questiondata')) || {};



  const [basicData, setBasicData] = useState(initBasicData);
  const [questionData, setQuestionData] = useState(initQuestionsData);

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(basicData));
  }, [basicData])
  useEffect(() => {
    localStorage.setItem('questiondata', JSON.stringify(questionData));
  }, [questionData]);


  const addBasicData = (name, email, contact) => {
    const myBasicData = {
      name: name,
      email: email,
      contact: contact
    };

    setBasicData(myBasicData);
    localStorage.setItem("data", JSON.stringify(myBasicData));
  }

  const addQuestionData = (profession, interest, reference) => {
    const myQuestionData = {
        profession: profession,
        interest: interest,
        reference: reference
    };

    setQuestionData(myQuestionData);
    localStorage.setItem("questiondata", JSON.stringify(myQuestionData));
}

}