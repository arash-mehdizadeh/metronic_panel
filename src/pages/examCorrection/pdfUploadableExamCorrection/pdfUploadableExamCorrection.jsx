import { useState } from 'react';

import { PdfUploadableCorrectionComponent } from '../../../components/correctionComponents/descriptiveCorrectionComponent';

import '../../../App.scss';
import Layout from '../../../layout/layout';
import { SidebarAction, SidebarInfo } from '../../../components/correction-sidebar/correction-sidebar';


const PdfUploadableExamCorrection = () => {

    const [sum, setSum] = useState(0);

    function scoreSum(data) {
        setSum(data)
    }

    return (
        <Layout>
            <div className='transaction-container'>
                <div className='transaction-record-sidebox'>
                    <SidebarInfo />
                    <SidebarAction  isPdf />
                </div>
                <div className="transaction-list-container active-primary-box">
                    <PdfUploadableCorrectionComponent isCorrection sumHandler={scoreSum} />
                </div>
            </div>
        </Layout>
    )
}

export default PdfUploadableExamCorrection;