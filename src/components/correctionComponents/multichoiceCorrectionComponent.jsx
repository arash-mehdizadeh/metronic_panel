import { useState, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import Layout from '../../layout/layout';
import { SidebarAction, SidebarInfo } from '../correction-sidebar/correction-sidebar';
import CustomMultiChoiceQuestion from '../questionComponents/customDescriptiveQuestion/CustomMultiChoiceQuestion';
import TableComponent from '../table/table';


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
                    <SidebarInfo />
                    <SidebarAction isPdf />
                </div>
                <div className="transaction-list-container active-primary-box">
                <TableComponent headerData={["زمان ورود به آزمون","صحیح","غلط","پاسخ نداده","ضریب منفی","نمره"]} />
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
                    <SidebarInfo />
                    <SidebarAction />
                </div>
                <div className="transaction-list-container active-primary-box">
                    <TableComponent headerData={["زمان ورود به آزمون","صحیح","غلط","پاسخ نداده","ضریب منفی","نمره"]} />
                    its should be custom multichoice modified component
                </div>
            </div>
        </Layout>
    )
}

export { MultichoiceCorrectionComponent, TestCorrectionComponent };


