import { useState, useMemo, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

import './CustomMultiChoiceQuestion.scss';




const MultiChoiceComponent = ({ id, score, sumHandler }) => {

    const [value, setValue] = useState("");
    const [question, setQuestion] = useState("");
    const [correctOption, setCorrectOption] = useState(0)
    const [isUpload, setIsUpload] = useState(false);


    const { register, getValues, handleSubmit } = useForm();

    useEffect(() => {
        var abc = 0;
        document.querySelectorAll('#custom-test--score-input').forEach(input => {
            abc += +input.value;
        });
        sumHandler(abc);
    })


    const handleOptionChange = (id) => {
        setCorrectOption(id);
    };

    const handleOnSubmit = (event) => {
        // event.preventDefault();
        if (correctOption === 0) {
            Swal.fire({
                icon: "warning",
                title: "گزینه صحیح را انتخاب کنید",
                text: ` در سوال ${id} ,گزینه صحیح را انتخاب کنید`,
                timer: 2500
            })
        }
        else {
            console.log({
                question_number: id,
                score: event.score,
                questionInput: getValues("questionInput"),
                options: [
                    {
                        option_number: 1,
                        correct: correctOption == 1 ? 1 : 0,
                        body: getValues("option1")
                    },
                    {
                        option_number: 2,
                        correct: correctOption == 2 ? 1 : 0,
                        body: getValues("option2")
                    },
                    {
                        option_number: 3,
                        correct: correctOption == 3 ? 1 : 0,
                        body: getValues("option3")
                    },
                    {
                        option_number: 4,
                        correct: correctOption == 4 ? 1 : 0,
                        body: getValues("option4")
                    },
                ],
            });
        }
    };


    return (
        <form onSubmit={handleSubmit(d => handleOnSubmit(d))} className='descriptive-question' key={id}>
            <div className='question-scoring--container'>
                <p className='input-title input--scoring-custom'>سوال {id} :</p>
                <div className='input-title descriptive-scoring--container'>
                    <input type="number" {...register("score", { required: true })} min="0" step={"0.25"} id='custom-test--score-input' className='input--score' />
                    <p>نمره</p>
                </div>
            </div>
            <div className='descriptive-question--detail'>
                <textarea className='input--textarea' rows="15"  {...register("questionInput", { required: true })} placeholder='سوال را اینجا بنویسید ...' />
                <div></div>
                <div></div>
                <div className='descriptive-question--upload-container'>
                    <div className='primary-box box--upload-image'>بارگذاری عکس</div>
                    <div className='primary-box box--upload-audio'>بارگذاری صوت</div>
                </div>

                <div className='multichoice-question--container'>

                    <div className='multichoice-question'>
                        <p className='input-title' style={{ margin: 0, width: "60px" }}>گزینه 1 :</p>
                        <input type="text" className='input--answer-option' {...register("option1", { required: true })} placeholder='گزینه 1 را بنویسید' />
                        <div className='currect-answer--radio-btn'>
                            <input type="radio" className='input--radio-btn' onChange={() => handleOptionChange(1)}
                                checked={correctOption === 1}
                            />
                            <p className={`${correctOption === 1 ? "active-correct-answer--title" : ""}`}>جواب</p>
                        </div>
                    </div>
                    <div className='multichoice-question'>
                        <p className='input-title' style={{ margin: 0, width: "60px" }}>گزینه 2 :</p>
                        <input type="text" className='input--answer-option' {...register("option2", { required: true })} placeholder='گزینه 2 را بنویسید' />
                        <div className='currect-answer--radio-btn'>
                            <input type="radio" className='input--radio-btn' onChange={() => handleOptionChange(2)}
                                checked={correctOption === 2}
                            />
                            <p className={`${correctOption === 2 ? "active-correct-answer--title" : ""}`}>جواب</p>
                        </div>
                    </div>
                    <div className='multichoice-question'>
                        <p className='input-title' style={{ margin: 0, width: "60px" }}>گزینه 3 :</p>
                        <input type="text" className='input--answer-option' {...register("option3", { required: true })} placeholder='گزینه 3 را بنویسید' />
                        <div className='currect-answer--radio-btn'>
                            <input type="radio" className='input--radio-btn' onChange={() => handleOptionChange(3)}
                                checked={correctOption === 3}
                            />
                            <p className={`${correctOption === 3 ? "active-correct-answer--title" : ""}`}>جواب</p>
                        </div>
                    </div>
                    <div className='multichoice-question'>
                        <p className='input-title' style={{ margin: 0, width: "60px" }}>گزینه 4 :</p>
                        <input type="text" className='input--answer-option' {...register("option4", { required: true })} placeholder='گزینه 4 را بنویسید' />
                        <div className='currect-answer--radio-btn'>
                            <input type="radio" className='input--radio-btn' onChange={() => handleOptionChange(4)}
                                checked={correctOption === 4}
                            />
                            <p className={`${correctOption === 4 ? "active-correct-answer--title" : ""}`}>جواب</p>
                        </div>
                    </div>

                </div>
                <div className='descriptive-question--submitBtn'>
                    <>{isUpload ? <p>سوال با موفقیت ثبت شد</p> : <p></p>}</>
                    <button type='submit' id='submitBtn'>ثبت</button>
                </div>
            </div>
        </form>
    )
}


const CustomMultiChoiceQuestion = (props) => {


    const [scoreData, setScoreData] = useState([]);


    const updateOptionHandler = (idScore, data) => {
        var updatedList = scoreData.filter((elem) => {
            return idScore !== elem.id;
        });
        updatedList.push(data)
        setScoreData(updatedList)
    };

    if (props.isCorrection) {
        // fetchData
        // set data
    }

    const handleAutoObj = () => {
        let arr = [];
        const question = (id) => {
            return {
                id: id + 1,
                score: 0,
                questionInput: "",
                imageSrc: "",
                voiceSrc: "",
                options: [
                    {
                        option_number: 1,
                        correct: 1,
                        body: ""
                    },
                    {
                        option_number: 2,
                        correct: 0,
                        body: ""
                    },
                    {
                        option_number: 3,
                        correct: 0,
                        body: ""
                    },
                    {
                        option_number: 4,
                        correct: 0,
                        body: ""
                    },
                ]
            }
        }
        for (let i = 0; i < +props.amount; i++) {
            arr.push(question(i));
        }
        setScoreData(arr)
    }
    useEffect(() => {
        handleAutoObj();
    }, [])

    function sumHandler(sum) {
        props.scoreSum(sum)
    }

    return (
        <div className='descriptive-question--container'>
            {
                // props.isCorrection ? :
                scoreData.map((el) =>
                    <MultiChoiceComponent id={el.id} score={el.score} sumHandler={sumHandler} />
                )}
        </div>
    )
}

export default CustomMultiChoiceQuestion