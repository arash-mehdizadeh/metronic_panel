import { useEffect } from 'react';
import { useState, useMemo } from 'react';
import { useForm } from 'react-hook-form';


import './descriptiveQuestion.scss';


const DescriptiveQuestionComponent = ({ id, score ,sumHandler }) => {

    const [value, setValue] = useState("");
    const [question, setQuestion] = useState("");
    const [isUpload, setIsUpload] = useState(false);

    const handleOnChange = (e) => {
        setValue(e.target.value);
    };
    const handleQuestionChange = (e) => {
        setQuestion(e.target.value);
    };
    const handleOnSubmit = (event) => {
        event.preventDefault();
        
    };

    useEffect(() => {
        var abc = 0;
        document.querySelectorAll('#form-input-score').forEach(input => {
            abc += +input.value;
        });
        sumHandler(abc);
    }, [value])

    return (
        <form onSubmit={handleOnSubmit} className='descriptive-question' key={id}>
            <div className='question-scoring--container'>
                <p className='input-title input--scoring-custom'>سوال {id} :</p>
                <div className='input-title descriptive-scoring--container'>
                    <input type="number" value={value} id='form-input-score' onChange={handleOnChange} min="0" step={"0.25"}  className='input--score' />
                    <p>نمره</p>
                </div>
            </div>
            <div className='descriptive-question--detail'>
                <textarea className='input--textarea' rows="15" value={question} onChange={handleQuestionChange} placeholder='سوال را اینجا بنویسید ...' />
                <div></div>
                <div></div>
                <div className='descriptive-question--upload-container'>
                    <div className='primary-box box--upload-image'>بارگذاری عکس</div>
                    <div className='primary-box box--upload-audio'>بارگذاری صوت</div>
                </div>
                <div className='descriptive-question--submitBtn'>
                    <>{isUpload ? <p>سوال با موفقیت ثبت شد</p> : <p></p> }</>
                    <button type='submit' id='submitBtn'>ثبت</button>
                </div>
            </div>
        </form>
    )
}


const DescriptiveQuestion = (props) => {


    const [scoreData, setScoreData] = useState([]);


    const handleAutoObj = () => {
        let arr = [];
        const question = (id) => {
            return {
                id: id+1,
                score: 0,
                questionInput: "",
                imageSrc:"",
                voiceSrc:"",
            }
        }
        for (let i = 0; i < +props.amount; i++) {
            arr.push(question(i));
        }
        setScoreData(arr)
    }

    function sumHandler(num){
        props.scoreSum(num)
    }

    useEffect(()=>{
        handleAutoObj();
    },[])


    return (
        <div className='descriptive-question--container'>
            {scoreData.map((el) =>
                <DescriptiveQuestionComponent id={el.id} score={el.score} sumHandler={sumHandler} />
            )}
            {/* <div className='add-question--button' onClick={() => addSingleScore()}>
                <button id='submitBtn'>+ اضافه کردن سوال</button>
            </div> */}
        </div>
    )
}

export default DescriptiveQuestion