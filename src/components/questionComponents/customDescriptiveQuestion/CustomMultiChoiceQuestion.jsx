import { useState, useMemo } from 'react';
import { useForm } from 'react-hook-form';


import './CustomMultiChoiceQuestion.scss';




const MultiChoiceComponent = ({ id, score }) => {

    const [value, setValue] = useState("");
    const [question, setQuestion] = useState("");
    const [correctOption, setCorrectOption] = useState(0)

    const { register ,getValues } = useForm();

    const handleOnChange = (e) => {
        setValue(e.target.value);
    };
    const handleOptionChange = (id) => {
        setCorrectOption(id);
    };
    const handleQuestionChange = (e) => {
        setQuestion(e.target.value);
    };
    const handleOnSubmit = (event) => {
        event.preventDefault();
        console.log({
            id: id,
            score: getValues("score"),
            questionInput: getValues("questionInput"),
            option1: getValues("option1"),
            option2: getValues("option2"),
            option3: getValues("option3"),
            option4: getValues("option4"),
            correctAnswer: correctOption
            
        });
    };


    return (
        <form onSubmit={handleOnSubmit} className='descriptive-question' key={id}>
            <div className='question-scoring--container'>
                <p className='input-title input--scoring-custom'>سوال {id} :</p>
                <div className='input-title descriptive-scoring--container'>
                    <input type="number" {...register("score")} className='input--score' />
                    <p>نمره</p>
                </div>
            </div>
            <div className='descriptive-question--detail'>
                <textarea className='input--textarea' rows="15"  {...register("questionInput")} placeholder='سوال را اینجا بنویسید ...' />
                <div></div>
                <div></div>
                <div className='descriptive-question--upload-container'>
                    <div className='primary-box box--upload-image'>بارگذاری عکس</div>
                    <div className='primary-box box--upload-audio'>بارگذاری صوت</div>
                </div>

                <div className='multichoice-question--container'>

                    <div className='multichoice-question'>
                        <p className='input-title' style={{margin:0,width:"60px"}}>گزینه 1 :</p>
                        <input type="text" className='input--answer-option' {...register("option1")} placeholder='گزینه 1 را بنویسید'  />
                        <div className='currect-answer--radio-btn'>
                            <input type="radio" className='input--radio-btn' onChange={()=>handleOptionChange(1)} 
                                checked={correctOption === 1}
                            />
                            <p className={`${ correctOption  === 1 ? "active-correct-answer--title" : ""}`}>جواب</p>
                        </div>
                    </div>
                    <div className='multichoice-question'>
                        <p className='input-title' style={{margin:0,width:"60px"}}>گزینه 2 :</p>
                        <input type="text" className='input--answer-option' {...register("option2")} placeholder='گزینه 2 را بنویسید'  />
                        <div className='currect-answer--radio-btn'>
                            <input type="radio" className='input--radio-btn' onChange={()=>handleOptionChange(2)} 
                                checked={correctOption === 2}
                            />
                            <p className={`${ correctOption  === 2 ? "active-correct-answer--title" : ""}`}>جواب</p>
                        </div>
                    </div>
                    <div className='multichoice-question'>
                        <p className='input-title' style={{margin:0,width:"60px"}}>گزینه 3 :</p>
                        <input type="text" className='input--answer-option' {...register("option3")} placeholder='گزینه 3 را بنویسید'  />
                        <div className='currect-answer--radio-btn'>
                            <input type="radio" className='input--radio-btn' onChange={()=>handleOptionChange(3)}
                                checked={correctOption === 3}
                            />
                            <p className={`${ correctOption  === 3 ? "active-correct-answer--title" : ""}`}>جواب</p>
                        </div>
                    </div>
                    <div className='multichoice-question'>
                        <p className='input-title' style={{margin:0,width:"60px"}}>گزینه 4 :</p>
                        <input type="text" className='input--answer-option' {...register("option4")} placeholder='گزینه 4 را بنویسید'  />
                        <div className='currect-answer--radio-btn'>
                            <input type="radio" className='input--radio-btn' onChange={()=>handleOptionChange(4)}
                                checked={correctOption === 4}
                            />
                            <p className={`${ correctOption  ===4 ? "active-correct-answer--title" : ""}`}>جواب</p>
                        </div>
                    </div>

                </div>
                <div className='descriptive-question--submitBtn'>
                    <button type='submit' id='submitBtn'>ثبت</button>
                </div>
            </div>
        </form>
    )
}


const CustomMultiChoiceQuestion = () => {


    const [scoreData, setScoreData] = useState([]);
    const [num, setNum] = useState(1);


    const deleteHandler = (index) => {
        // console.log(index);
        const updatedData = scoreData.filter((elem) => {
            return index !== elem.id;
        });
        setScoreData(updatedData);
    };


    const updateOptionHandler = (idScore, data) => {
        var updatedList = scoreData.filter((elem) => {
            return idScore !== elem.id;
        });
        updatedList.push(data)
        setScoreData(updatedList)
    };


    const increaseNum = () => {
        setNum(prev => prev + 1);
    }
    const addSingleScore = () => {
        setScoreData(arr => [...arr, {
            id: num,
            score: 0,
            questionInput: "",
            option1: "",
            option2: "",
            option3: "",
            option4: "",
            correctAnswer: 0
        }
        ])
        setNum(prev => prev + 1)
    }

    return (
        <div className='descriptive-question--container'>
            {scoreData.map((el) =>
                <MultiChoiceComponent id={el.id} score={el.score} />
            )}
            <div className='add-question--button' onClick={() => addSingleScore()}>
                <button id='submitBtn'>+ اضافه کردن سوال</button>
            </div>
        </div>
    )
}

export default CustomMultiChoiceQuestion