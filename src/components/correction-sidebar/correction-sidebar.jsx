import React from 'react'

const SidebarInfo = (props) => {
    return (
        <div className='transaction-detail-container sidebox-button-container'>
            <div className='user--exam-name' >
                <p>پاسخبرگ کاربر :</p>
                <p>{props.name}</p>
            </div>
            <div>
                <p>جمع کل نمره کاربر : {props.sum}</p>
            </div>
        </div>
    )
}

const SidebarAction = (props) => {
    return (
        <div className='transaction-filter-box'>
            <p id='text--download'>دانلود PDF سوالات</p>
            <label className='checkbox--container'>
                <input type="checkbox" className='input-checkbox' />
                نمایش کارنامه و نمره به کاربر
            </label>
            <button className='corrected-btn'>تصحیح شد</button>
        </div>
    )
}
export { SidebarInfo ,SidebarAction };