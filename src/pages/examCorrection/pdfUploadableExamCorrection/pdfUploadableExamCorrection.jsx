import { useState } from 'react';

import { PdfUploadableCorrectionComponent } from '../../../components/correctionComponents/descriptiveCorrectionComponent';
import MenuLinks from '../../../components/menuLink/menuLinks';

import { ReactComponent as ArrowMenu } from '../../../assets/icons/arrows/arr079.svg';
import { ReactComponent as DashboardSvg } from '../../../assets/icons/menu/dashboard.svg';

import '../../../App.scss';
import Layout from '../../../layout/layout';


const PdfUploadableExamCorrection = () => {

    const [sum, setSum] = useState(0);

    function scoreSum(data) {
        setSum(data)
    }

    return (
        <Layout>
            <div className='transaction-container'>
                <div className='transaction-record-sidebox'>
                    <div className='transaction-detail-container'>
                        <div className='user--exam-name' >
                            <p>پاسخبرگ کاربر :</p>
                            <p>ممد نوبری</p>
                        </div>
                        <div>
                            <p>جمع کل نمره کاربر : {sum}</p>
                        </div>
                    </div>
                    <div className='transaction-filter-box'>
                        <div>
                            <p>
                                دانلود PDF سوالات
                            </p>
                        </div>
                        <label>
                            <input type="checkbox" className='' />
                            نمایش کارنامه و نمره به کاربر
                        </label>
                        <div className=''>تصحیح شد</div>
                    </div>
                </div>
                <div className="transaction-list-container active-primary-box">
                    {/* < /> */}
                    <PdfUploadableCorrectionComponent isCorrection sumHandler={scoreSum} />
                </div>
            </div>
        </Layout>
    )
}

export default PdfUploadableExamCorrection;