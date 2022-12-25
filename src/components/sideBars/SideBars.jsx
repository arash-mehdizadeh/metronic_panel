import React from 'react'
import { ReactComponent as ChartIcon } from '../../assets/icons/generals/chart.svg';
import { ReactComponent as Add } from '../../assets/icons/generals/add.svg';
import { Link } from 'react-router-dom';


const SideBars = () => {
    return (
        <div className='transaction-detail-container'>
            <div className='transaction-buttons-container deactive-relative-box'>
                <Link to="/create-exam/exam-form" className='primary-box box-1'>
                    <span><Add /></span>
                    <p>ایجاد تکیلف</p>
                </Link>
                <Link to="/create-exam/exam-form"  className='primary-box box-2'>
                    <span><ChartIcon /></span>
                    <p>طراحان تکیلف</p>
                </Link>
            </div>
        </div>
    )
}

export default SideBars