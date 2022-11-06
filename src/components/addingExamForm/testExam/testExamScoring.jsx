import { useState ,useMemo } from 'react';
import { useForm } from 'react-hook-form';
import TestQuestionScoring from '../../questionScoring/testQuestionScoring';


import'./testExamScoring.scss';

const TestExamScoring = () => {

    const title = "بارم دهی سوالات تستی";
    const [scoreData, setScoreData] = useState([
        {
            id:1,
            score:0.25,
        }
    ])


    const deleteHandler = (index) => {
        console.log(index);
        const updatedData = scoreData.filter((elem) => {
            return index !== elem.id;
        });
        setScoreData(updatedData);
    };
    const updateHandler = (list) => {
        console.log(list);
        
        setScoreData(arr => [...arr, list]);
    };


    const { register, handleSubmit } = useForm({
        defaultValues: useMemo(() => {
            console.log("User has changed");
            // return user ;
        }, [])
    });
    

    const manualSubmit =(data)=>{
        var i =0;
        // var dataScoreList = [];
        for ( i = 0; i < +data.questionAmount; i++) {
            setScoreData(arr => [...arr,{
                id : Math.random().toString(16).slice(2),
                score : +data.questionScore
            }
        ]);}
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
                <form onSubmit={handleSubmit( d => manualSubmit(d))}>
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
                    <div className='scoring-table-header form-title' style={{margin:0}}>#  بارم</div>
                    <div className='scoring-table'>
                        <ul>
                            {
                                scoreData.map(el => (
                                    <TestQuestionScoring id={el.id} score={el.score} deleteHandler={deleteHandler} />
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestExamScoring