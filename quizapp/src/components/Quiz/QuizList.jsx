import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import axios from "axios";
const QuizList = () => {
  const [ dataResponse, setDataResponse ] = useState([])
  const [ answers, setAnswers ] = useState([])
  let [ index , setIndex] = useState(0)
  const query = new URLSearchParams(useLocation().search);
  const amount = query.get("amount");
  const type = query.get("type");
  const category = query.get("category");
  const difficulty = query.get("difficulty");

  let abcd = ['A' ,'B' , 'C' ,'D']

  useEffect(() => {
    async function fetchData() {
      let {data} = await axios.get(`https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`)
      setDataResponse(data.results)
    }
    fetchData();
  }, [amount,type,category,difficulty]);

  function shuffle(array) {
    var currentIndex = array.length,  randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }


  function clickAnswers(item){
    let obj = {}
    obj[index] = {right:dataResponse[index].correct_answer === item,...dataResponse[index]}
    setAnswers({...answers,...obj})
  }

  function close(){
      setIndex(index+=1)
      console.log(answers)
  }

  return (
    <div className="quiz container-xxl">
      <div className="border mt-8 py-4 p-3">
        <div className="quiz-box d-flex justify-between">
          <p className="fw-bold p-2 quiz-quiztion display-4 mb-12 bg-gray-200">
            Quistion No.{index+1} of {dataResponse.length}
          </p>
          <span className="display-4 mt-2">
            <time className="bg-gray-200 px-3 border">01</time>
            <time className="bg-gray-200 px-3 border">03</time>
            <time className="bg-gray-200 px-3 border">05</time>
          </span>
        </div>
        <h2 className="fs-3 shadow p-4 mb-5 bg-body-tertiary rounded">
          Q. {dataResponse[index] ? dataResponse[index]?.question : 'Loading....'}
        </h2>
        <p className="fs-4 mb-3">Please choose one of the following answers:</p>
        <hr className="mb-4" />
        <div className="mb-4">
          <ul>
           {
            dataResponse[index] ? (
              shuffle([...dataResponse[index].incorrect_answers,dataResponse[index].correct_answer]).map((item,i) => {
                return (
                  <li  onClick={() => clickAnswers(item)} className="border p-3 fs-5 fw-bold">
                    <span>{abcd[i]}: </span>{item}
                  </li>
                )
              })
            ):"Loading..."
           }
          </ul>
        </div>
        <hr className="mb-6" />
        <div className="text-end">
          <button onClick={close} className="fs-4 btn btn-primary">
            Next <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizList;
