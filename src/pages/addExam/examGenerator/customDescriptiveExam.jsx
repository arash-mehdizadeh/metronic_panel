
import DescriptiveQuestion from '../../../components/questionComponents/descriptiveQuestion/descriptiveQuestion';

import '../../../App.scss';
import Layout from '../../../layout/layout';


const CustomDescriptiveExam = () => {

    return (
        <Layout>
            <div className="transaction-list-container active-primary-box">
                <DescriptiveQuestion />
            </div>
        </Layout>
    )
}

export default CustomDescriptiveExam;