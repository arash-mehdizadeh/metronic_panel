import { useState, useEffect } from 'react';

import TestQuestion from '../../../components/questionComponents/testQuestion/testQuestion';


import '../../../App.scss';
import Layout from '../../../layout/layout';
import { useRef } from 'react';
import { postFormData, storeFileURL } from '../../../assets/api/createExamAPI';
import { useParams } from 'react-router-dom';

const TestExam = () => {

    const ref = useRef();
    const params = useParams();
    const [sum, setSum] = useState(0)
    const [file, setFile] = useState(null)
    console.log(params.code.replace("?",""))
    console.log(params.code.replace("#",""))

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
    
    const onSubmitHandler = async(e) =>{
        e.preventDefault();
        const dataFile = new FormData();
        dataFile.append("file", file);
        await postFormData(dataFile).then(res => { formDataRes(res.data) }) 
    }

    const onFileChangeHandler = (event) => {
        setFile(event.target.files[0]);
        console.log(event.target.files[0]);
    }
    const onFileDeleteHandler = () => {
        ref.current.value = "";
    }
    function scoreSum(data) {
        setSum(data)
    }

    return (
        <Layout>
            <div className='transaction-container'>
                <form onSubmit={()=>onSubmitHandler()} className='transaction-record-sidebox'>
                    <div className='transaction-filter-box'>
                        <div><p>{`مجموع بارم سوالات : ${sum}`}</p></div>
                        <div className='filter-input-container'>
                            <p>آپلود PDF :</p>
                            <div>
                                <input type='file' ref={ref} name="inputFileValue" placeholder=' آپلود فایل PDF ...' onChange={onFileChangeHandler} />

                                {/* <input type="file" className='input-handler' placeholder=' آپلود فایل PDF ...' /> */}
                            </div>
                        </div>
                        <p id='reset-btn' onClick={()=> onFileDeleteHandler()} >حذف فایل</p>
                        <div className=''>
                            <button >ثبت نهایی سوالات</button>
                        </div>
                    </div>
                </form>
                <div className="transaction-list-container active-primary-box">
                    <TestQuestion scoreSum={scoreSum} />
                </div>
            </div>
        </Layout>

    )
}
export default TestExam