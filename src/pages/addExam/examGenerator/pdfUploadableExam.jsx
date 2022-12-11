import { useState } from 'react';

import PdfUploadable from '../../../components/questionComponents/customDescriptiveQuestion/pdfUploadableQuestion/PdfUploadable';

import '../../../App.scss';
import Layout from '../../../layout/layout';


const PdfUploadableExam = () => {

    const [sum, setSum] = useState(0);

    function scoreSum(data) {
        setSum(data)
    }

    return (
        <Layout>
            <div className='transaction-container'>
                <div className='transaction-record-sidebox'>
                    
                    <div className='transaction-filter-box'>
                        <div><p>{`مجموع بارم سوالات : ${sum}`}</p></div>
                        <div className='filter-input-container'>
                            <p>آپلود PDF :</p>
                            <div>
                                <input type="file" className='input-handler' placeholder=' آپلود فایل PDF ...' />
                            </div>
                        </div>
                        <p id='reset-btn'>حذف فایل</p>
                    </div>
                </div>
                <div className="transaction-list-container active-primary-box">
                    <PdfUploadable scoreSum={scoreSum} />
                </div>
            </div>
        </Layout>
    )
}

export default PdfUploadableExam;