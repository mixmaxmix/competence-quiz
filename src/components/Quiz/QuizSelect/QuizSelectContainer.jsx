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

    const handleEditQuiz = () => {

    }

    const handleCreateQuiz = () => {

    }

    return (
      <div className='quiz-select-container'>
          <div className='quiz-top-container'>
            <h3 className='quiz-name'>{props.name}</h3>
          </div>
          <p className='quiz-passcount'>Максимально количество прохождений: {props.maxPassCount}</p>
          {
              (isAdmin()) ? (
                  
                <div>
                    <button className='quiz-button' onClick={handleDeleteQuiz}>Delete</button>
                    <button className='quiz-button' onClick={handleEditQuiz}>Edit</button>
                </div>

              ) : <></>
          }
      </div>
    )
}
