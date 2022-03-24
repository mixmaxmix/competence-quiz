import React from 'react'
import '../../Quiz/Quiz.css'
import {isAdmin} from "../../../api/principal";
import {deleteQuiz} from "../../../api/quiz.api";

export default function QuizSelectContainer(props) {

    const handleDeleteQuiz = () => {
        deleteQuiz(props.id).then(() => {
            window.location.reload()
        })
    }

    return (
      <div className='quiz-select-container'>
          <h3 className='quiz-name'>{props.name}</h3>
          <p className='quiz-passcount'>Максимально количество прохождений: {props.maxPassCount}</p>
          {
              (isAdmin()) ? (
                  <button onClick={handleDeleteQuiz}>Delete</button>
              ) : <></>
          }
      </div>
    )
}
