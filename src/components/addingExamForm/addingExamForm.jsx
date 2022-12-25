import { useEffect, useMemo, useState } from "react";

import { DatePicker, DateTimePicker } from "react-advance-jalaali-datepicker";


import './addingExam.scss';
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import { quizCreateAPI } from "../../assets/api/createExamAPI";
import { useNavigate } from "react-router-dom";

const AddingExamForm = () => {

    const navigate = useNavigate();

    const [activeExamType, setActiveExamType] = useState("test");
    const [activeTypeTest, setActiveTypeTest] = useState("rank");
    const [negativeAnswer, setNegativeAnswer] = useState("false");
    const [examDate, setExamDate] = useState("anyDate");
    const [enterTime, setEnterTime] = useState("anyTime");
    const [endTime, setEndTime] = useState("anyTime");
    const [examResult, setExamResult] = useState("no_display");
    const [showResultDate, setShowResultDate] = useState()
    const [examStartDate, setExamStartDate] = useState();
    const [toggle, setToggle] = useState(false);



    function showResultDateHandler(unix, formatted) {
        // console.log(unix); // returns timestamp of the selected value, for example.
        setShowResultDate(formatted); // returns the selected value in the format you've entered, forexample, "تاریخ: 1396/02/24 ساعت: 18:30".
    }
    function examStartDateHandler(unix, formatted) {
        // console.log(unix); // returns timestamp of the selected value, for example.
        setExamStartDate(formatted); // returns the selected value in the format you've entered, forexample, "تاریخ: 1396/02/24 ساعت: 18:30".
    }
    const testTypeHandler = (event) => {
        setActiveTypeTest(event.target.value);
    }
    const examTypeHandler = (event) => {
        setActiveExamType(event.target.value);
    }
    const negativeAnswerHandler = (event) => {
        setNegativeAnswer(event.target.value);
    }
    const examDateHandler = (event) => {
        setExamDate(event.target.value);
    }
    const enterTimeHandler = (event) => {
        setEnterTime(event.target.value);
    }
    const endTimeHandler = (event) => {
        setEndTime(event.target.value);
    }
    const examResultHandler = (event) => {
        setExamResult(event.target.value);
    }
    const toggleHandler = () => {
        setToggle(prev => !prev)
    }
    const handleChange = (e) => {
        setToggle(e.target.checked)
    }

    const user = {
        type: "test",
        negetiveAnswer: "false",
        questionType: "pdf",
    }


    const { register, reset, formState: { errors }, setValue, getValues, handleSubmit } = useForm({
        defaultValues: useMemo(() => {
            // console.log("User has changed");
            return user;
        }, [])
    });
    

    const setExamData = async(props) => {
        const formStoreData = {
            title: props.title,
            number_of_question: props.number_of_question,
            type: activeExamType,
            test_type: activeExamType === "descriptive" ? "score" : activeTypeTest,
            negative_point: negativeAnswer === "false" ? null : props.negative_point,
            date: examDate === "anyDate" ? null : examStartDate,
            start_time_from: enterTime !== "specified" ? null : props.start_time_from,
            start_time_to: enterTime !== "specified" ? null : props.start_time_to,
            end_time: endTime === "end_time" ? props.end_time : null,
            duration: endTime === "duration" ? props.duration : null,
            show_result: examResult,
            show_result_from: examResult === "range" ? showResultDate +" " + props.show_result_from_time : null,
            show_result_to: examResult === "range" ? showResultDate +" " + props.show_result_from_time : null,
            question_type: props.questionType,
            guest: props.guest ? 1 : 0,
            leave: props.leave ? 1 : 0,
            active: toggle ? 1 : 0,
        }
        console.log(formStoreData);
        const res = await quizCreateAPI(formStoreData)
        console.log(res.data);
        if(res?.status === "success"){
            navigate(`/create-exam/${res?.data.question_type}-${res?.data.type}/${res?.data.number_of_question}/${res?.data.id}/${res?.data.code}`);
        }
        else{
            alert(res?.status)
        }
        console.log(res);
    }


    const handleRegistration = (data) => {
        setExamData(data);

        // do this : make a function and send data as props to func
        // console.log(formStoreData);
    }

    // useEffect(()=>{
    //     console.log("changed");
    //     setActiveTypeTest(prev => !prev) 
    // },[getValues("type")])

    return (
        <form onSubmit={handleSubmit(handleRegistration)}>
            <div className='form-1-container  active-primary-box'>
                <div className='exam-form-details'>
                    <div className='form-input--container'>
                        <p className='form-title'>عنوان آزمون :</p>
                        <ErrorMessage
                            errors={errors}
                            name="title"
                            render={({ message }) => <p className="form-title error-message">{"این فیلد اجباری میباشد *"}</p>}
                        />
                        <input type="text" {...register("title", { required: true })} className='form-input' placeholder='عنوان آزمون را وارد کنید' />
                        <ErrorMessage errors={errors} name="title" />
                    </div>
                    <div className='form-input--container'>
                        <p className='form-title'>تعداد سوالات :</p>
                        <ErrorMessage
                            errors={errors}
                            name="number_of_question"
                            render={({ message }) => <p className="form-title error-message">{"این فیلد اجباری میباشد *"}</p>}
                        />
                        <input type="number" className='form-input' {...register("number_of_question", { required: true })} placeholder='تعداد سوالات را وارد کنید ...' />
                        <ErrorMessage errors={errors} name="number_of_question" />
                    </div>
                    <div className='form-input-radio--container'>
                        <p className='form-title'>نوع آزمون :</p>

                        <div className='radio--container'>
                            <label className='input-radio-title'>
                                <input className='form-check-input custom-checkbox' onChange={examTypeHandler}
                                    checked={activeExamType === "test" ? true : false}
                                    value="test" type="radio" />
                                تستی
                            </label>
                            <label className='input-radio-title'>
                                <input className='form-check-input custom-checkbox' onChange={examTypeHandler}
                                    checked={activeExamType === "descriptive" ? true : false}
                                    value="descriptive" type="radio" />
                                تشریحی بارم دار
                            </label>
                        </div>
                    </div>
                    <div className='form-input-radio--container' style={{ display: activeExamType === "descriptive" ? "none" : "flex" }}>
                        <p className='form-title'>نوع آزمون تستی :</p>
                        <div className='radio--container'>
                            <label className='input-radio-title'>
                                <input className='form-check-input custom-checkbox' onChange={testTypeHandler}
                                    checked={activeTypeTest === "rank" ? true : false}
                                    value={"rank"} type="radio" />
                                رتبه ای (رقابتی)
                            </label>
                            <label className='input-radio-title'>
                                <input className='form-check-input custom-checkbox' onChange={testTypeHandler}
                                    checked={activeTypeTest === "score" ? true : false}
                                    value={"score"} type="radio" />
                                بارم دار (نمره دار)
                            </label>

                        </div>
                    </div>
                    <div className='form-input-radio--container'>
                        <p className='form-title'>ضریب منفی تست :</p>
                        <div className='radio--container'>

                            <label className='input-radio-title'>
                                <input className='form-check-input custom-checkbox' onChange={negativeAnswerHandler}
                                    checked={negativeAnswer === "false"}
                                    value={"false"} type="radio" />
                                ندارد
                            </label>
                            <label className='input-radio-title'>
                                <input className='form-check-input custom-checkbox'
                                    onChange={negativeAnswerHandler}
                                    checked={negativeAnswer === "true"}
                                    value={"true"} type="radio" />
                                <select placeholder='انتخاب مدیر آموزشگاه' {...register("negative_point")} disabled={negativeAnswer === "false"}
                                    className='select-form-input' > {/* add register in here */}
                                    <option className='factorForm--option' value="2/1">2 به 1</option>
                                    <option className='factorForm--option' value="3/1">3 به 1</option>
                                    <option className='factorForm--option' value="4/1">4 به 1</option>
                                </select>
                            </label>
                        </div>
                    </div>
                    <div className='form-input-radio--container'>
                        <p className='form-title'>تاریخ برگزاری آزمون :</p>
                        <div className='radio--container'>
                            <label className='input-radio-title'>
                                <input className='form-check-input custom-checkbox'
                                    onChange={examDateHandler}
                                    checked={examDate === "anyDate"}
                                    value={"anyDate"} type="radio" />
                                هر تاریخی
                            </label>
                            <label className='input-radio-title'>
                                <input className='form-check-input custom-checkbox'
                                    onChange={examDateHandler}
                                    checked={examDate === "pickExamTime"}
                                    value={"pickExamTime"} type="radio" />
                                <DatePicker
                                    // disabled={examDate === "anyTime"}  
                                    placeholder="انتخاب تاریخ"
                                    format="jYYYY-jMM-jDD"
                                    id="dateTimePicker"
                                    
                                    onChange={examStartDateHandler}
                                />
                            </label>
                        </div>
                    </div>
                    <div className='form-input-radio--container'>
                        <p className='form-title'>ساعت ورود کاربران :</p>
                        <div className='radio--container'>
                            <label className='input-radio-title'>
                                <input className='form-check-input custom-checkbox'
                                    onChange={enterTimeHandler}
                                    checked={enterTime === "anyTime"}
                                    value={"anyTime"} type="radio" />
                                هر ساعتی
                            </label>
                            <label className='input-radio-title'>
                                <input className='form-check-input custom-checkbox'
                                    onChange={enterTimeHandler}
                                    checked={enterTime === "specified"}
                                    value={"specified"} type="radio" />
                                <span id='dateTime-span'>
                                    <p>از ساعت</p>
                                    <input disabled={enterTime === "anyTime"}  {...register("start_time_from")} type="time" id="form-input--show-exam-result" placeholder="ساعت ورود به آزمون" />
                                    <p>تا ساعت</p>
                                    <input type="time" {...register("start_time_to")} disabled={enterTime === "anyTime"} id="form-input--show-exam-result" placeholder="ساعت خروج" />
                                    <p>تاریخ برگزاری آزمون</p>
                                </span>
                            </label>
                        </div>
                    </div>
                    <div className='form-input-radio--container'>
                        <p className='form-title'>زمان پایان آزمون :</p>
                        <div className='radio--container'>
                            <label className='input-radio-title'>
                                <input className='form-check-input custom-checkbox'
                                    onChange={endTimeHandler}
                                    checked={endTime === "anyTime"}
                                    value={"anyTime"} type="radio" />
                                نامحدود
                            </label>
                            <label className='input-radio-title'>
                                <input className='form-check-input custom-checkbox'
                                    onChange={endTimeHandler}
                                    checked={endTime === "end_time"}
                                    value={"end_time"} type="radio" />
                                <p>ساعت</p>
                                <input type="time" id='form-input--show-exam-result' disabled={endTime !== "end_time"}  {...register("end_time")} />
                                <p style={{ width: "170px", paddingRight: "10px" }}>تاریخ برگزاری آزمون</p>
                            </label>
                            <label className='input-radio-title'>
                                <input className='form-check-input custom-checkbox'
                                    onChange={endTimeHandler}
                                    checked={endTime === "duration"}
                                    value={"duration"} type="radio" />
                                تا<input type="text" id='form-input--show-exam-result' disabled={endTime !== "duration"} {...register("duration")} placeholder='60' />دقیقه بعد از ورود کاربر به آزمون
                            </label>
                        </div>
                    </div>
                    <div className='form-input-radio--container'>
                        <p className='form-title'>نمایش کارنامه تستی :</p>
                        <div className='radio--container'>
                            {/*ayooooooooooooooo nigga */}

                            <label className='input-radio-title'>
                                <input className='form-check-input custom-checkbox'
                                    onChange={examResultHandler}
                                    checked={examResult === "no_display"}
                                    value={"no_display"} type="radio" />
                                عدم نمایش
                            </label>
                            <label className='input-radio-title'>
                                <input className='form-check-input custom-checkbox' onChange={examResultHandler}
                                    checked={examResult === "after_quiz_end"}
                                    value={"after_quiz_end"} type="radio" />
                                پس از اتمام آزمون
                            </label>

                            <label className='input-radio-title'>
                                <input className='form-check-input custom-checkbox' onChange={examResultHandler}
                                    checked={examResult === "range"}
                                    value={"range"} type="radio" />
                                <p style={{ width: "55px" }}>در تاریخ</p>
                                <DatePicker id='dateTimePicker' style={{ width: "300px" }} format="jYYYY-jMM-jDD" preSelected='انتخاب تاریخ' onChange={showResultDateHandler} />
                                <p>ساعت</p>
                                <input type="time" id='form-input--show-exam-result' disabled={examResult !== "range"} {...register("show_result_from_time", { required: examResult === "specified_date" ? true : false })} />
                            </label>
                        </div>
                    </div>
                    <div className='form-input-radio--container'>
                        <p className='form-title'>نوع وارد کردن آزمون :</p>
                        <div className='radio--container'>
                            <label className='input-radio-title'>
                                <input className='form-check-input custom-checkbox' {...register("questionType")} value='pdf' type="radio" />
                                تمام سوالات در یک فایل PDF
                            </label>
                            <label className='input-radio-title'>
                                <input className='form-check-input custom-checkbox' {...register("questionType")} value='custom' type="radio" />
                                وارد کردن سوال به صورت تک تک ( متن ,عکس و صوت )
                            </label>
                        </div>
                    </div>
                </div>
                <div className='exam-form-options'>
                    <div className="exam-form-option--container">
                        <input type="checkbox" {...register("guest")} className="form-check-input" />
                        <div className="option-description--container">
                            <p className="input-title">ورود مهمان باز</p>
                            <p><span>icon</span>در صورت فعال بودن این گزینه همه میتوانند از طریق لینک وارد آزمون شوند</p>
                        </div>
                    </div>
                    <div className="exam-form-option--container">
                        <input type="checkbox"  {...register("leave")} className="form-check-input" />
                        <div className="option-description--container">
                            <p className="input-title" >ترک آزمون فعال باشد</p>
                            <p><span>icon</span>در صورت فعال بودن این گزینه ,در صورتی که کاربر آزمون را ترک کند زمان باقی مانده آزمون برای وی محفوظ تا زمانی که بتواند وارد آزمون شود</p>
                        </div>
                    </div>
                    <div className='exam-form-option--container' style={{alignItems:"center"}}>
                        <div className="switch">
                            <span>
                                <input
                                    type="checkbox"
                                    id="toggleInput"
                                    // ref="toggleInput"
                                    checked={toggle}
                                    onChange={handleChange}
                                />
                                <button
                                    className="slider"
                                    type="button"
                                    onClick={() => toggleHandler()}>
                                </button>
                            </span>
                            <label
                                htmlFor="toggleInput"
                                onClick={() => toggleHandler()}>

                                {/* Change to {this.props.title} and you can set the label text in a higher level component */}
                            </label>
                        </div>
                        <p>
                            آزمون {toggle ? "فعال" : "غیر فعال"} است
                        </p>
                    </div>
                </div>
            </div>
            <div id="form-add-button--container">
                <button type="submit" id="form-add-button">افزودن</button>
            </div>
        </form>
    )
}

export default AddingExamForm