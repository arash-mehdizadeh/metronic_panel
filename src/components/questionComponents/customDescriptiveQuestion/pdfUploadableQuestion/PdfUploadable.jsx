
import { forwardRef, useImperativeHandle } from 'react';
import { useState, useMemo, useEffect, useReducer } from 'react';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';
import Swal from 'sweetalert2';



import './pdfUploadableQuestion.scss'
import './testExamScoring.scss';

const PdfUploadableInput = ({ id, score, deleteHandler, updateScoreHandler, sumHandler }) => {


    const [value, setValue] = useState(score);

    const handleOnChange = (event) => {
        event.preventDefault()
        if(parseInt(event.target.value)>= 0){
            setValue(event.target.value);
        }

    };


    useEffect(() => {
        var abc = 0;
        document.querySelectorAll('#descriptive-pdf--input-score').forEach(input => {
            abc += +input.value;
        });
        sumHandler(abc);
    }, [value])

    useEffect(() => {
        const timeoutId = setTimeout(() => updateScoreHandler(id, value), 1000);
        return () => clearTimeout(timeoutId);
    }, [value]);



    return (
        <li className='test-formScore--list' key={id}>
            <div className='test-formScore--container'>
                <input value={value} onChange={handleOnChange} type="number" min={"0"} required onInvalid={ e => e.target.setCustomValidity("بارم سوال را به صورت صحیح وارد کنید.")} step={"0.25"}  id='descriptive-pdf--input-score' className='form-input--secondary' />
                {/* <span onClick={() => { deleteHandler(id); }}>X</span> */}
            </div>
        </li>
    )
}


const PdfUploadable = forwardRef((props,ref) => {

    const [data, setData] = useState([]);
    let [searchParams] = useSearchParams();
    const amount = searchParams.get("amount");
    const id = searchParams.get("qid");

    const handleAutoObj = () => {
        let arr = [];
        const question = (id) => {
            return {
                question_number: id,
                score: 0,
            }
        }
        for (let i = 0; i < amount; i++) {
            arr.push(question(i));
        }
        setData(arr)
    }

    
    const updateScoreHandler = (id, newScore) => {
        const index = data.findIndex(object => {
            return object.question_number === id;
        });
        if (index !== -1) {
            data[index].score = +newScore;
        }
    }


    const handleSubmitData = () => {
        for (let i = 0; i < data.length; i++) {
            // console.log(data[i]);
            if (data[i].score === 0) {
                Swal.fire({
                    icon:"warning",
                    title:`نمره سوال ${data[i].question_number}`
                })
            }
        }

    }

    
    useImperativeHandle(ref, () => ({
        childFunction1() {
            handleSubmitData()
        },
    }));



    useEffect(()=>{
        handleAutoObj();
    },[])
    function sumHandler(sum) {
        props.scoreSum(sum)
    }
    

    return (
        <div className='test-scoring--container'>
            <div className='return-btn--container'>
                <button id='return-btn'>بازگشت</button>
            </div>
            {/* <div className='automatic-scoring--container'>
                <p className='form-title'>بارم دهی اتوماتیک :</p>
                <form onSubmit={handleSubmit(d => massStoreHandler(d))}>
                    <div className="form-auto-scoring--container">
                        <p className='form-title ml-6'>تعداد سوالات :</p>
                        <input type="text" className='form-input' placeholder='تعداد سوالات' {...register("questionAmount", { required: true })} />
                    </div>
                    <div className="form-auto-scoring--container">
                        <p className='form-title ml-6'>بارم سوالات :</p>
                        <input type="text" className='form-input' placeholder='بارم سوالات' {...register("questionScore", { required: true })} />
                    </div>
                    <button type="submit" id='return-btn'>ثبت</button>
                </form>

            </div> */}
            <div className='scoring-table--container'>
                <p className='form-title'>بارم سوالات :</p>
                <div className='scoring-section'>
                    <div className='scoring-table-header form-title' style={{ margin: 0 }}>#  بارم</div>
                    <div className='scoring-table'>
                        <ul>
                            {

                                data.map(el =>
                                (
                                    <PdfUploadableInput id={el.question_number} score={el.score}
                                        updateScoreHandler={updateScoreHandler} //  deleteHandler={deleteHandler}
                                        sumHandler={sumHandler}
                                    />
                                )
                                )

                            }
                            {/* <div className='adding-test-score--container'><button id='adding-test-score--btn' onClick={() => { dispatch({ type: "addSingle" }) }}>+ اضافه </button></div> */}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
})
export default PdfUploadable;