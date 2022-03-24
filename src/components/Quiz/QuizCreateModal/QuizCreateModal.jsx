import React from 'react'
import '../QuizCreateModal/QuizCreateModal.css'



export default function QuizCreateModal(props) {
    const handleModal = () => {
        
    }


  return (
    <div>
        <div className='quiz-form'>
            <h2 className='quiz-title'>{props.title}</h2>
            <div className='quiz-form-container'>
                <input className='form-input' type="text" />
                <input className='form-input' type="text" />
                <input className='form-input' type="text" />
                <input className='form-input' type="text" />
                <input className='form-input' type="text" />
                <input className='form-input' type="text" />
            </div>
            <button className='header-button'>Otpravit</button>
        </div>
        <div onClick={handleModal} className='background-modal'></div>
    </div>
  )
}
