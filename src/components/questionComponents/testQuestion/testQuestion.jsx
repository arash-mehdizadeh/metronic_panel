
import { useState, useMemo, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import './testQuestion.scss';

const TestInput = ({ id, score, option ,deleteHandler, updateScoreHandler ,updateOptionHandler }) => {


    const [value, setValue] = useState(score);
    const [optionBtn, setOptionBtn] = useState(option);

    const handleOptionChange = (btnID) => {
        setOptionBtn(btnID);
    };
    const handleOnChange = (event) => {
        setValue(event.target.value);
    };

    useEffect(() => {
        const timeoutId = setTimeout(() => updateScoreHandler(id, value),updateOptionHandler(id,optionBtn), 1000);
        return () => clearTimeout(timeoutId);
    }, [value]);



    return (
        <li className='test-form-score--list' key={id}>
            <div className='test-form-score--container'>
                <div className='test-options--container'>
                    <div onClick={() => handleOptionChange(1) } className={`test-option--button ${ optionBtn == 1 ?"active-option-btn" : "" } `}>۱</div>
                    <div onClick={() => handleOptionChange(2) } className={`test-option--button ${ optionBtn == 2 ?"active-option-btn" : "" } `}>۲</div>
                    <div onClick={() => handleOptionChange(3) } className={`test-option--button ${ optionBtn == 3 ?"active-option-btn" : "" } `}>۳</div>
                    <div onClick={() => handleOptionChange(4) } className={`test-option--button ${ optionBtn == 4 ?"active-option-btn" : "" } `}>٤</div>
                </div>
                <input value={value} onChange={handleOnChange} type="number" className='form-input--secondary' />
                <span onClick={() => deleteHandler(id)}>X</span>
            </div>
        </li>
    )
}


const TestQuestion = () => {

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


    const { register, handleSubmit } = useForm({
        defaultValues: useMemo(() => {
            // console.log("User has changed");
            // return user ;
        }, [])
    });
    const increaseNum = () => {
        setNum(prev => prev + 1);
    }
    const addSingleScore = () => {
        console.log(scoreData);
        setScoreData(arr => [...arr, {
            id: num,
            option:0,
            score: 0
        }
        ])
        setNum(prev => prev + 1)
    }

    const manualSubmit = (data) => {

        var i = 0;
        // var dataScoreList = [];
        for (i = 0; i < +data.questionAmount; i++) {
            increaseNum(); // apply change in here

            setScoreData(arr => [...arr, {
                id: num,
                option:0,
                score: +data.questionScore
            }
            ]);
        }
        console.log(scoreData);
        //     dataScoreList.push({
        //         id : Math.random().toString(16).slice(2),
        //         score : +data.questionScore
        //     });
        // }
        // updateHandler(dataScoreList)
    }
    // style of scoring column 
    return (
        <div className='test-scoring--container'>
            <div className='return-btn--container'>
                <button id='return-btn'>بازگشت</button>
            </div>
            <div className='automatic-scoring--container'>
                <p className='form-title'>بارم دهی اتوماتیک :</p>
                <form onSubmit={handleSubmit(d => manualSubmit(d))}>
                    <div className="form-auto-scoring--container">
                        <p className='form-title ml-6'>تعداد سوالات :</p>
                        <input type="text" className='form-input' placeholder='تعداد سوالات' {...register("questionAmount")} />
                    </div>
                    <div className="form-auto-scoring--container">
                        <p className='form-title ml-6'>بارم سوالات :</p>
                        <input type="text" className='form-input' placeholder='بارم سوالات' {...register("questionScore")} />
                    </div>
                    <button type="submit" id='return-btn'>ثبت</button>
                </form>

            </div>
            <div className='scoring-table--container'>
                <p className='form-title'>بارم سوالات :</p>
                <div className='scoring-section'>
                    <div className='scoring-table-header form-title' style={{ margin: 0 }}>#  بارم</div>
                    <div className='scoring-table'>
                        <ul className='test--table'>
                            {
                                scoreData.map(el => (
                                    <TestInput id={el.id} option={el.option} score={el.score} 
                                    updateScoreHandler={updateScoreHandler} deleteHandler={deleteHandler}
                                    updateOptionHandler={updateOptionHandler}
                                    />
                                ))
                            }
                            <div className='adding-test-score--container'><button id='adding-test-score--btn' onClick={() => addSingleScore()}>+ اضافه </button></div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TestQuestion;

