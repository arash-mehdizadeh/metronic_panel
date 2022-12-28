import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams ,useSearchParams } from 'react-router-dom';


import './testQuestion.scss';

const TestInput = ({ id, score, options, deleteHandler, isRank, updateScoreHandler, updateOptionHandler, sumHandler }) => {

    const [value, setValue] = useState(score);
    // const [optionBtn, setOptionBtn] = useState(options);
    const [optionBtn, setOptionBtn] = useState(0);

    const handleOptionChange = (btnID) => {
        setOptionBtn(btnID);
        updateOptionHandler(id, btnID)
    };
    const handleOnChange = (event) => {
        setValue(event.target.value);
    };


    useEffect(() => {
        const timeoutId = setTimeout(() => updateScoreHandler(id, value), updateOptionHandler(id, optionBtn), 1000);
        return () => clearTimeout(timeoutId);
    }, [value, optionBtn]);

    useEffect(() => {
        var abc = 0;
        document.querySelectorAll('#form-input-score').forEach(input => {
            abc += +input.value;
        });
        sumHandler(abc);
    }, [value])

    return (
        <li className='test-form-score--list' key={id}>
            <div className='test-form-score--container'>
                <div className='test-options--container'>
                    {
                        options?.map((el) => 
                        (<>
                            {/* {el.correct === 1 && handleOptionChange(el.option_number)} */}
                            <div key={el.option_number} onClick={() => { handleOptionChange(el.option_number); }} className={`test-option--button ${optionBtn == el.option_number ? "active-option-btn" : ""} `}>{el.option_number}</div>
                            </>
                        ))
                    }
                </div>
                { isRank === "true"? <></> : <input value={value} onChange={handleOnChange} type="number" min="0" step="0.25" id='form-input-score' className='form-input--secondary' />}
            </div>
        </li>
    )
}
const TestCorrectionInput = ({ id, score, options, deleteHandler, updateScoreHandler, updateOptionHandler, sumHandler }) => {

    const [value, setValue] = useState(score);
    // const [optionBtn, setOptionBtn] = useState(options);
    const [optionBtn, setOptionBtn] = useState(0);

    const handleOptionChange = (btnID) => {
        setOptionBtn(btnID);
        updateOptionHandler(id, btnID)
    };
    const handleOnChange = (event) => {
        setValue(event.target.value);
    };


    useEffect(() => {
        const timeoutId = setTimeout(() => updateScoreHandler(id, value), updateOptionHandler(id, optionBtn), 1000);
        return () => clearTimeout(timeoutId);
    }, [value, optionBtn]);

    useEffect(() => {
        var abc = 0;
        document.querySelectorAll('#form-input-score').forEach(input => {
            abc += +input.value;
        });
        sumHandler(abc);
    }, [value])

    return (
        <li className='test-form-score--list' key={id}>
            <div className='test-form-score--container'>
                <div className='test-options--container'>
                    {
                        options?.map((el) => 
                        (<>
                            {/* {el.correct === 1 && handleOptionChange(el.option_number)} */}
                            <div key={el.option_number} onClick={() => { handleOptionChange(el.option_number); }} className={`test-option--button ${optionBtn == el.option_number ? "active-option-btn" : ""} `}>{el.option_number}</div>
                            </>
                        ))
                    }
                </div>
                <input value={value} onChange={handleOnChange} type="number" min="0" step="0.25" id='form-input-score' className='form-input--secondary' />
            </div>
        </li>
    )
}


const TestQuestion = (props) => {
    // const params = useParams()
    let [searchParams, setSearchParams] = useSearchParams();
    const [data, setData] = useState([]); 


    const amount = searchParams.get("amount");
    const id = searchParams.get("qid");
    const isRank = searchParams.get("rank");

    const handleAutoObj = () => {
        let arr = [];
        const question = (id) => {
            return {
                question_number: id,
                score: 0,
                options: [
                    {
                        option_number: 1,
                        correct: 0,
                        body: null
                    },
                    {
                        option_number: 2,
                        correct: 0,
                        body: null
                    },
                    {
                        option_number: 3,
                        correct: 0,
                        body: null
                    },
                    {
                        option_number: 4,
                        correct: 0,
                        body: null
                    },
                ]
            }
        }
        for (let i = 0; i < +amount; i++) {
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

    const updateOptionHandler = (id, optionValue) => {
        const index = data.findIndex(object => {
            return object.question_number === id;
        });
        if (index !== -1) {
            data[index].options.map(el => {
                if (el.option_number == optionValue) {
                    el.correct = 1;
                }
                else {
                    el.correct = 0
                }
            })
        }
    }

    function sumHandler(sum) {
        props.scoreSum(sum)
    }

    useEffect(() => {
        handleAutoObj()
    }, [])



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
                <p className='form-title' onClick={() => console.log(data) }>بارم سوالات :</p>
                <div className='scoring-section'>
                    {/* <div className='scoring-table-header form-title' style={{ margin: 0 }}>#  بارم</div> */}
                    <div className='scoring-table'>
                        <ul className='test--table'>
                            {
                                props.isCorrection ? 
                                data
                                :   data.map(el =>
                                (
                                    <TestInput id={el.question_number} options={el.options} score={el.score}
                                        updateScoreHandler={updateScoreHandler}  isRank={isRank} //  deleteHandler={deleteHandler}
                                        updateOptionHandler={updateOptionHandler} sumHandler={sumHandler}
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
};

export default TestQuestion;

