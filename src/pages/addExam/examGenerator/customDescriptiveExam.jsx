
import DescriptiveQuestion from '../../../components/questionComponents/descriptiveQuestion/descriptiveQuestion';

import '../../../App.scss';
import Layout from '../../../layout/layout';
import { useState } from 'react';
import { useParams } from 'react-router-dom';


const CustomDescriptiveExam = () => {

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
                        <button id='confirm-btn'>ثبت و ادامه</button>    
                    </div>
                </div>
                <div className="transaction-list-container active-primary-box">
                    <DescriptiveQuestion amount={params.qu_amount}  scoreSum={scoreSum}/>
                </div>
            </div>
        </Layout>
    )
}

export default CustomDescriptiveExam;