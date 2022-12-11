import { useState, useMemo, useEffect, useReducer } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

import './testQuestion.scss';

const TestInput = ({ id, score, options, deleteHandler, updateScoreHandler, updateOptionHandler ,sumHandler }) => {

    const [value, setValue] = useState(score);
    // const [optionBtn, setOptionBtn] = useState(options);
    const [optionBtn, setOptionBtn] = useState(0);

    const handleOptionChange = (btnID) => {
        setOptionBtn(btnID);
        updateOptionHandler(id,btnID)
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
    },[value])

    return (
        <li className='test-form-score--list' key={id}>
            <div className='test-form-score--container'>
                <div className='test-options--container'>
                    {
                        options?.map((el) => (
                            <div key={el.option_number} onClick={() => { handleOptionChange(el.option_number); }} className={`test-option--button ${optionBtn == el.option_number ? "active-option-btn" : ""} `}>{el.option_number}</div>
                        ))
                    }
                </div>
                <input value={value} onChange={handleOnChange} type="number" id='form-input-score' className='form-input--secondary' />
                <span onClick={() => deleteHandler(id)}>X</span>
            </div>
        </li>
    )
}


const TestQuestion = (props) => {
    const params = useParams()

    const [data, setData] = useState([])



    const { register, handleSubmit } = useForm({
        defaultValues: useMemo(() => {
        }, [])
    });


    // const formData = { questions: [], quiz_id: params.quiz_id }

    // const objCreator = (id, score) => {
    //     return {
    //         question_number: id,
    //         score: score,
    //         options: [
    //             {
    //                 option_number: 1,
    //                 correct: 0,
    //                 body: null
    //             },
    //             {
    //                 option_number: 2,
    //                 correct: 0,
    //                 body: null
    //             },
    //             {
    //                 option_number: 3,
    //                 correct: 0,
    //                 body: null
    //             },
    //             {
    //                 option_number: 4,
    //                 correct: 0,
    //                 body: null
    //             },
    //         ]
    //     }
    // }

    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
    const initialState = { arr: [], id: 0 };
    function reducer(state, action) {
        switch (action.type) {
            case 'addSingle':
                return {
                    arr: [...state.arr, {
                        question_number: state.id + 1,
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
                    }], id: state.id + 1
                };
            case "massStore":
                return {
                    arr: [...state.arr, {
                        question_number: state.id + 1,
                        score: action.payload,
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
                    }], id: state.id + 1
                };
            case "Reset":
                return {}
            default:
                throw new Error();
        }
    }

    const massStoreHandler = (data) => {
        for (let i = 0; i < data.questionAmount; i++) {
            dispatch({ type: "massStore", payload: data.questionScore })
        }
        // setData(state.arr)
    }

    const arrDeleteHandler = (id) => {
        // dispatch({type:"deleteOption" ,payload:id })
        var newarr = state.arr.filter(item => item.question_number !== id)

        // console.log(newarr);
        // dispatch({ type: "Reset" })
        state.arr = [];
        state.id = 0;
        for (let i = 0; i < newarr.length; i++) {
            // console.log(newarr[i].score);
            dispatch({ type: "massStore", payload: newarr[i].score })
        }
        forceUpdate()
        // setData(newarr)
        // console.log(state.arr);
    }

    const updateScoreHandler = (id, newScore) => {
        const index = state.arr.findIndex(object => {
            return object.question_number === id;
        });
        if (index !== -1) {
            state.arr[index].score = +newScore;
        }
        // console.log(state.arr);
    }

    const updateOptionHandler = (id, optionValue) => {
        const index = state.arr.findIndex(object => {
            return object.question_number === id;
        });
        if (index !== -1) {
            state.arr[index].options.map( el => {
                if ( el.option_number == optionValue ){
                    el.correct = 1;
                }
                else{
                    el.correct = 0
                }
            } )
        }
        // console.log(state.arr);
    }

    function sumHandler(sum) {
        props.scoreSum(sum)
    }
    const [state, dispatch] = useReducer(reducer, initialState);

    // useEffect(() => {
    //     var abc = 0;
    //     document.querySelectorAll('#form-input-score').forEach(input => {
    //         abc += +input.value;
    //     });
    //     // sumHandler(abc);
    // })

    return (
        <div className='test-scoring--container'>
            <div className='return-btn--container'>
                <button id='return-btn'>بازگشت</button>
            </div>
            <div className='automatic-scoring--container'>
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

            </div>
            <div className='scoring-table--container'>
                <p className='form-title'>بارم سوالات :</p>
                <div className='scoring-section'>
                    {/* <div className='scoring-table-header form-title' style={{ margin: 0 }}>#  بارم</div> */}
                    <div className='scoring-table'>
                        <ul className='test--table'>
                            {
                                state.arr.map(el =>
                                (
                                    <TestInput id={el.question_number} options={el.options} score={el.score}
                                        deleteHandler={arrDeleteHandler} updateScoreHandler={updateScoreHandler} //  deleteHandler={deleteHandler}
                                        updateOptionHandler={updateOptionHandler} sumHandler={sumHandler}
                                    />
                                )
                                )
                            }
                            <div className='adding-test-score--container'><button id='adding-test-score--btn' onClick={() => { dispatch({ type: "addSingle" }) }}>+ اضافه </button></div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TestQuestion;

