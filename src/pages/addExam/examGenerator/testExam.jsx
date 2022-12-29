import { useState, useEffect, useRef } from 'react';

import TestQuestion from '../../../components/questionComponents/testQuestion/testQuestion';


import '../../../App.scss';
import Layout from '../../../layout/layout';
import { postFormData, storeFileURL } from '../../../assets/api/createExamAPI';
import { useParams, useSearchParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const TestExam = () => {

    const ref = useRef();
    const params = useParams();
    const [sum, setSum] = useState(0);
    const [file, setFile] = useState(null);


    const [searchParams] = useSearchParams();
    const isRank = searchParams.get("rank");
    const childRef = useRef(null);


    const formDataRes = async (res) => {
        // const resp = await postUserDescriptionAnswer(props.id, props.attemptID, userAnswer);
        // console.log("questionAnswerData =>", resp);
        // const fileURLData = {
        //     path: res.path, //"res.path"
        //     answer_id: resp.created_answer?.id,//id
        //     driver: "ftp",
        //     type: "open",
        // };
        // const aaa = await storeFileURL(fileURLData);
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        if (!file) {
            Swal.fire({
                icon: "error",
                title: "لطفا فایل pdf آپلود کنید."
            })
        }
        childRef.current.childFunction1();
        
        // const dataFile = new FormData();
        // dataFile.append("file", file);
        // await postFormData(dataFile).then(res => { formDataRes(res.data) }) 
    }

    const onFileChangeHandler = (event) => {
        setFile(event.target.files[0]);
        // console.log(event.target.files[0]);
    }
    const onFileDeleteHandler = () => {
        ref.current.value = "";
    }
    function scoreSum(data) {
        setSum(data)
    }
    const handleSubmitQuestion = (data) => {

        // console.log(data);
        // if it was Rank ,should nullish the score
    }

    const handleQuestion = (data) => {
        console.log(data);
    }

    return (
        <Layout>
            <div className='transaction-container'>
                <div className='transaction-record-sidebox'>
                    <div className='transaction-filter-box'>

                        {!isRank && <div>
                            <p>{`مجموع بارم سوالات : ${sum}`}</p>
                        </div>}
                        <div className='filter-input-container'>
                            <p>آپلود PDF :</p>
                            <div>
                                <input type='file' ref={ref} name="inputFileValue" accept='application/pdf' id='upload--btn' placeholder=' آپلود فایل PDF ...' onChange={onFileChangeHandler} />
                            </div>
                        </div>
                        <p id='reset-btn' onClick={() => onFileDeleteHandler()} >حذف فایل</p>
                        <form onSubmit={onSubmitHandler}>
                            <button type='submit' id='confirm-btn'>ثبت و ادامه</button>
                        </form>
                    </div>
                </div>
                <div className="transaction-list-container active-primary-box">
                    <TestQuestion scoreSum={scoreSum} questions={handleSubmitQuestion}
                        questionHandle={handleQuestion} ref={childRef} />
                </div>
            </div>
        </Layout>
    )
}
export default TestExam