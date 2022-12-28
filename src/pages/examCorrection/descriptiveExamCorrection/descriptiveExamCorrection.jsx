import { useState } from 'react';
import Layout from '../../../layout/layout';

import { DescriptiveCorrectionComponent } from '../../../components/correctionComponents/descriptiveCorrectionComponent';

import '../../../App.scss';
import './descriptiveExamCorrection.scss'
import { SidebarAction, SidebarInfo } from '../../../components/correction-sidebar/correction-sidebar';


const DescriptiveCorrection = () => {


    return (
        <Layout >
            <div className='transaction-container'>
                <div className='transaction-record-sidebox'>
                    <SidebarInfo />
                    <SidebarAction />
                </div>
                <div className="transaction-list-container active-primary-box">
                    {/* < /> */}
                    <DescriptiveCorrectionComponent />
                </div>
            </div>
        </Layout >
    )
}

export default DescriptiveCorrection;