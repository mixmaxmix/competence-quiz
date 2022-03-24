import React, { useEffect, useState } from 'react'
import '../../Quiz/Quiz.css'
import QuizSelectContainer from './QuizSelectContainer'
import {getQuiz} from "../../../api/quiz.api";
import QuizCreateModal from '../../Quiz/QuizCreateModal/QuizCreateModal'


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
      setDataQuiz(await getQuiz())
  }

  return (
      <div className='container'>
        <QuizCreateModal
          title={'Создание квиза'}
        />
        <div className='quiz-header'>
          <h1 className='quiz-title'>Выбор теста</h1>
          <button
            className='quiz-add'
          >
            Создать тест
          </button>
        </div>
        <div className='quiz-container'>
          {}
          {isLoading ?
              dataQuiz.map(el => {return <QuizSelectContainer key={el.id} id={el.id} name={el.name} maxPassCount={el.maxPassCount}/>})
              : ''}
          
          <QuizSelectContainer key={'el.id'} id={'el.id'} name={'el.name'} maxPassCount={'el.maxPassCount'}/>
        </div>
      </div>
  )
}
