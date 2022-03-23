import React, { useEffect, useState } from 'react'
import '../../Quiz/Quiz.css'
import QuizSelectContainer from './QuizSelectContainer'
import axios from 'axios'

export default function QuizSelect() {
  const [dataQuiz, setDataQuiz] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    if(dataQuiz !== null) {
      setIsLoading(true)
    }
  }, [dataQuiz])

  const getData = async() => {
    const response = 
    await axios
          .get('/api/v1/quiz')
          setDataQuiz(response.data.result)
  }

  const createQuiz = () => {
    axios
        .post('/api/v1/quiz', {
          maxPassCount: 10,
          name: 'нок'
        },{
          headers: {
            Authorization: localStorage.getItem('token')
          }
        }
      )
  }

  // createQuiz()

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
