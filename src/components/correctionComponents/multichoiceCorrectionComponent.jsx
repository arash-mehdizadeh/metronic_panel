import { useState, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import Layout from '../../layout/layout';
import CustomMultiChoiceQuestion from '../questionComponents/customDescriptiveQuestion/CustomMultiChoiceQuestion';


// import './descriptiveQuestion.scss';


const TestCorrectionComponent = () => {

    const [sum, setSum] = useState(0);

    function scoreSum(data) {
        setSum(data)
    }

    const handleOnSubmit = () => {

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
                    <CustomMultiChoiceQuestion isCorrection sumHandler={scoreSum} />
                </div>
            </div>
        </Layout>
    )
}

const MultichoiceCorrectionComponent = () => {

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
                            <p>جمع کل نمره کاربر : {85}</p>
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
                    its should be custom multichoice modified component
                </div>
            </div>
        </Layout>
    )
}

export { MultichoiceCorrectionComponent, TestCorrectionComponent };


