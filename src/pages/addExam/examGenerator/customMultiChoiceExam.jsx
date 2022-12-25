import { useState } from 'react';
import { useParams } from 'react-router-dom';

import CustomMultiChoiceQuestion from '../../../components/questionComponents/customDescriptiveQuestion/CustomMultiChoiceQuestion';


import '../../../App.scss';
import Layout from '../../../layout/layout';


const CustomMultiChoiceExam = () => {

    const params = useParams();
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
                        <button id='confirm-btn'>ثبت  و ادامه</button>

                    </div>
                </div>
                <div className="transaction-list-container active-primary-box">
                    <CustomMultiChoiceQuestion amount={ +params.qu_amount}  scoreSum={scoreSum} />
                </div>
            </div>
        </Layout>

    )
}

export default CustomMultiChoiceExam;