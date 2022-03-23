import React, { useEffect, useState } from 'react'
import '../../Quiz/Quiz.css'
import QuizSelectContainer from './QuizSelectContainer'
import {getQuiz} from "../../../api/quiz.api";

export default function QuizSelect() {
  const [dataQuiz, setDataQuiz] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setDataQuiz(getQuiz())
  }, [])

  useEffect(() => {
    if(dataQuiz !== null) {
      setIsLoading(true)
    }
  }, [dataQuiz])

  return (
    <div className='container'>
      <div className='quiz-container'>
          {}
          {isLoading ? 
            dataQuiz.map(el => {return <QuizSelectContainer key={el.id} name={el.name} maxPassCount={el.maxPassCount}/>}) 
          : ''}
          <h1 className='quiz-title'>Выбор теста</h1>
      </div>
    </div>
  )
}
