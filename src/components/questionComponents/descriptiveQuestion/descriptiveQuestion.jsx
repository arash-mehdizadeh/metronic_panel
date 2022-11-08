import { useState, useMemo } from 'react';
import { useForm } from 'react-hook-form';


import './descriptiveQuestion.scss';


const DescriptiveQuestionComponent = ({ id, score }) => {

    const [value, setValue] = useState("");
    const [question, setQuestion] = useState("");

    const handleOnChange = (e) => {
        setValue(e.target.value);
    };
    const handleQuestionChange = (e) => {
        setQuestion(e.target.value);
    };
    const handleOnSubmit = (event) => {
        event.preventDefault();
        
    };


    return (
        <form onSubmit={handleOnSubmit} className='descriptive-question' key={id}>
            <div className='question-scoring--container'>
                <p className='input-title input--scoring-custom'>سوال {id} :</p>
                <div className='input-title descriptive-scoring--container'>
                    <input type="number" value={value} onChange={handleOnChange} className='input--score' />
                    <p>نمره</p>
                </div>
            </div>
            <div className='descriptive-question--detail'>
                <textarea className='input--textarea' rows="15" value={question}  onChange={handleQuestionChange} placeholder='سوال را اینجا بنویسید ...' />
                <div></div>
                <div></div>
                <div className='descriptive-question--upload-container'>
                    <div className='primary-box box--upload-image'>بارگذاری عکس</div>
                    <div className='primary-box box--upload-audio'>بارگذاری صوت</div>
                </div>
                <div className='descriptive-question--submitBtn'>
                    <button type='submit' id='submitBtn'>ثبت</button>
                </div>
            </div>
        </form>
    )
}


const DescriptiveQuestion = () => {


    const [scoreData, setScoreData] = useState([]);
    const [num, setNum] = useState(1);


    const deleteHandler = (index) => {
        // console.log(index);
        const updatedData = scoreData.filter((elem) => {
            return index !== elem.id;
        });
        setScoreData(updatedData);
    };

    const updateScoreHandler = (idScore, event) => {
        var updatedData = scoreData.filter((elem) => {
            return idScore === elem.id;
        });
        var updatedList = scoreData.filter((elem) => {
            return idScore !== elem.id;
        });

        updatedData[0].score = +event;

        updatedList.push(updatedData[0])
        setScoreData(updatedList)

    };


    const updateOptionHandler = (idScore, optionValue) => {
        var updatedData = scoreData.filter((elem) => {
            return idScore === elem.id;
        });
        var updatedList = scoreData.filter((elem) => {
            return idScore !== elem.id;
        });

        updatedData[0].option = +optionValue;

        updatedList.push(updatedData[0])
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
        }
        ])
        setNum(prev => prev+1)
    }

    return (
        <div className='descriptive-question--container'>
            {scoreData.map((el) =>
                <DescriptiveQuestionComponent id={el.id} score={el.score} />
            )}
            <div className='add-question--button' onClick={() => addSingleScore()}>
                <button id='submitBtn'>+ اضافه کردن سوال</button>
            </div>
        </div>
    )
}

export default DescriptiveQuestion