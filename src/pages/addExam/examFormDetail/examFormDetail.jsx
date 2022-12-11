import { useState } from 'react';
import Layout from '../../../layout/layout';
import AddingExamForm from '../../../components/addingExamForm/addingExamForm';

import '../../../App.scss';

const ExamFormDetail = () => {

    return (
        <Layout title="ایجاد آزمون" >
            <div>
                <div className="transaction-list-container">
                    <AddingExamForm />
                </div>
            </div>
        </Layout>

    )

}


export default ExamFormDetail