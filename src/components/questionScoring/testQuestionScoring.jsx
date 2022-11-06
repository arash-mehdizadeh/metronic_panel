import React from 'react'
import './testQuestionScoring.scss'


// add useForm and style and default value

const TestQuestionScoring = ({ id ,score ,deleteHandler }) => {
    return (
        <li key={id}>
            <div className=''>
                <input type="text" className='form-input--secondary'  />
                <span onClick={() =>deleteHandler(id)}>X</span>
            </div>
        </li>
    )
}

export default TestQuestionScoring;