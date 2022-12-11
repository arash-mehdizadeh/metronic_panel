import { useState } from 'react';
import Layout from '../../../layout/layout';

import { DescriptiveCorrectionComponent } from '../../../components/correctionComponents/descriptiveCorrectionComponent';
import MenuLinks from '../../../components/menuLink/menuLinks';

import { ReactComponent as ArrowMenu } from '../../../assets/icons/arrows/arr079.svg';
import { ReactComponent as DashboardSvg } from '../../../assets/icons/menu/dashboard.svg';

import '../../../App.scss';
import './descriptiveExamCorrection.scss'


const DescriptiveExamCorrection = () => {


    return (
        <Layout >
            <div className='transaction-container'>
                <div className='transaction-record-sidebox'>
                    <div className='transaction-detail-container sidebox-button-container'>
                        <div className='user--exam-name' >
                            <p>پاسخبرگ کاربر :</p>
                            <p>ممد نوبری</p>
                        </div>
                        <div>
                            <p>جمع کل نمره کاربر : {85}</p>
                        </div>
                    </div>
                    <div className='transaction-filter-box'>
                        <label className='checkbox--container'>
                            <input type="checkbox" className='input-checkbox' />
                            نمایش کارنامه و نمره به کاربر
                        </label>
                        <button className='corrected-btn'>تصحیح شد</button>
                    </div>
                </div>
                <div className="transaction-list-container active-primary-box">
                    {/* < /> */}
                    <DescriptiveCorrectionComponent />
                </div>
            </div>
        </Layout >
    )
}

export default DescriptiveExamCorrection;