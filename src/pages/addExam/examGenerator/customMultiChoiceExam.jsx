import { useState } from 'react';

import CustomMultiChoiceQuestion from '../../../components/questionComponents/customDescriptiveQuestion/CustomMultiChoiceQuestion';


import '../../../App.scss';
import Layout from '../../../layout/layout';


const CustomMultiChoiceExam = () => {

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
                    </div>
                </div>
                <div className="transaction-list-container active-primary-box">
                    <CustomMultiChoiceQuestion scoreSum={scoreSum} />
                </div>
            </div>
        </Layout>

    )
}

export default CustomMultiChoiceExam;