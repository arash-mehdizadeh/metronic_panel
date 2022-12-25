import { useState } from 'react';

import MenuLinks from '../../../components/menuLink/menuLinks';


import { ReactComponent as Info } from '../../../assets/icons/generals/info.svg';
import { ReactComponent as ChartIcon } from '../../../assets/icons/generals/chart.svg';
import { ReactComponent as Add } from '../../../assets/icons/generals/add.svg';
import { ReactComponent as AddFull } from '../../../assets/icons/generals/Add-full.svg';

import './addUserToExamList.scss'
import Layout from '../../../layout/layout';

const AddTeacherToExamList = () => {


    return (
        <Layout>
            <div className='transaction-container'>
                <div className='transaction-record-sidebox'>
                    <div className='transaction-detail-container'>
                        <div className='transaction-buttons-container deactive-relative-box'>
                            <div className='primary-box box-1'>
                                <span><Add /></span>
                                <p>دانلود نمونه</p>
                            </div>
                            <div className='primary-box box-2'>
                                <span><ChartIcon /></span>
                                <p>افزودن با اکسل</p>
                            </div>
                        </div>
                    </div>
                    <div className='transaction-filter-box'>
                        <div className='filter-input-container'>
                            <p>جستوجو :</p>
                            <div className='margin-b-16'>
                                <input type="test" className='input-handler' placeholder='افزودن و جستوجو طراح آزمون ...' />
                            </div>
                            <div className='add-user-side-buttons' style={{ justifyContent: "space-evenly" }}>
                                <p className='primary-box box-4'>افزودن همه</p>
                                <p className='primary-box box-3'>حذف همه</p>
                            </div>
                            <p className='align-text'><AddFull width={"22"} /> ایجاد طراح آزمون</p>
                            <p className='align-text'><Info width={"22"} /> اگر کاربر را نیافته اید ,آن را ایجاد کنید</p>
                        </div>
                        <p id='reset-btn'>حذف فیلتر ها</p>
                    </div>
                </div>
                <div className="transaction-list-container active-primary-box">
                    <div className='added-user-list--title'>لیست کاربران</div>

                    <ul className='added-user-list--container'>
                        <li className='added-user-list'>
                            <div className='added-user-list-id-details'>
                                <span className='no-handler'>{1} #</span>
                                <div className='added-user-list-details '>
                                    <p>قاف علی</p>
                                    <p>09123456789</p>
                                </div>
                            </div>
                            <span className='delete-btn'>X</span>
                        </li>

                    </ul>
                </div>
            </div>
        </Layout>
    )
}

export default AddTeacherToExamList;