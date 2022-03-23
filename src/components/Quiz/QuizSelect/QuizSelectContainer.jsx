import React from 'react'
import '../../Quiz/Quiz.css'

export default function QuizSelectContainer(props) {

    return (
      <div className='quiz-select-container'>
          <h3 className='quiz-name'>{props.name}</h3>
          <p className='quiz-passcount'>Осталось прохождений: {props.maxPassCount}</p>
      </div>
    )
}
