
import { DatePicker, DateTimePicker } from "react-advance-jalaali-datepicker";


import './addingExam.scss';
import { useForm } from "react-hook-form";
import { useEffect, useMemo, useState } from "react";

const AddingExamForm1 = () => {

    const [activeExamType, setActiveExamType] = useState("test");
    const [activeTypeTest, setActiveTypeTest] = useState("rank");
    const [negativeAnswer, setNegativeAnswer] = useState("false");
    const [negativePoint, setNegativePoint] = useState("3/1");
    const [examDate, setExamDate] = useState("anyDate");
    const [enterTime, setEnterTime] = useState("anyTime");
    const [endTime, setEndTime] = useState("anyTime");
    const [examResult, setExamResult] = useState("no_display");

    // const [first, setfirst] = useState(second)
    // const [first, setfirst] = useState(second)
    // const [first, setfirst] = useState(second)
    // const [first, setfirst] = useState(second)
    // const [first, setfirst] = useState(second)

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

    const user = {
        type: "test",
        negetiveAnswer: "false",
        questionType: "pdf",
    }

    const { register, reset, setValue, getValues, handleSubmit } = useForm({
        defaultValues: useMemo(() => {
            // console.log("User has changed");
            return user;
        }, [])
    });



    // useEffect(()=>{
    //     console.log("changed");
    //     setActiveTypeTest(prev => !prev)
    // },[getValues("type")])

    return (
        <form onSubmit={handleSubmit(d => console.log(d))}>
            <div className='form-1-container'>
                <div className='exam-form-details'>
                    <div className='form-input--container'>
                        <p className='form-title'>عنوان آزمون :</p>
                        <input type="text" {...register("title")} className='form-input' placeholder='عنوان آزمون را وارد کنید' />
                    </div>
                    <div className='form-input--container'>
                        <p className='form-title'>تعداد سوالات :</p>
                        <input type="text" className='form-input' {...register("number_of_question")} placeholder='تعداد سوالات را وارد کنید ...' />
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
                    <div className='form-input-radio--container'>
                        <p className='form-title'>نوع آزمون تستی :</p>
                        <div className='radio--container'>
                            <label className='input-radio-title'>
                                <input className='form-check-input custom-checkbox' onChange={testTypeHandler}
                                    checked={activeTypeTest === "rank" ? true : false} disabled={activeExamType === "descriptive"}
                                    value={"rank"} type="radio" />
                                رتبه ای (رقابتی)
                            </label>
                            <label className='input-radio-title'>
                                <input className='form-check-input custom-checkbox' onChange={testTypeHandler}
                                    checked={activeTypeTest === "score" ? true : false} disabled={activeExamType === "descriptive"}
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
                                    <option className='factorForm--option' value="3/1">3 به 1</option>
                                    <option className='factorForm--option' value="1/1">1 به 1</option>
                                    <option className='factorForm--option' value="5/1">5 به 1</option>
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
                                    format="تاریخ: jYYYY/jMM/jDD ساعت: HH:mm"
                                    id="dateTimePicker"
                                // onChange={...register("date")}
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
                                    <input disabled={enterTime === "anyTime"} type="time" id="form-input--show-exam-result" placeholder="ساعت ورود به آزمون" />
                                    <p>تا ساعت</p>
                                    <input type="time" disabled={enterTime === "anyTime"} id="form-input--show-exam-result" placeholder="ساعت خروج" />
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
                                    checked={endTime === "specified_time"}
                                    value={"specified_time"} type="radio" />
                                <p>ساعت</p>
                                <input type="time"  id='form-input--show-exam-result' disabled={endTime !== "specified_time"}  {...register("end_time")} />
                                <p style={{ width: "170px", paddingRight: "10px" }}>تاریخ برگزاری آزمون</p>
                            </label>
                            <label className='input-radio-title'>
                                <input className='form-check-input custom-checkbox'
                                    onChange={endTimeHandler}
                                    checked={endTime === "min_end"}
                                    value={"min_end"} type="radio" />
                                تا<input type="text" id='form-input--show-exam-result' disabled={endTime !== "min_end"} {...register("end_time")} placeholder='60' />دقیقه بعد از ورود کاربر به آزمون
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
                                <input className='form-check-input custom-checkbox'  onChange={examResultHandler}
                                    checked={examResult === "specified_date"}
                                    value={"specified_date"}  type="radio" />
                                <p>در تاریخ</p>
                                <DatePicker id='dateTimePicker' style={{width : "300px"}}  preSelected='انتخاب تاریخ'   {...register("show_result_from")} />
                                <p>ساعت</p>
                                <input type="time" id='form-input--show-exam-result' {...register("show_result_to")} />
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
                        <input type="checkbox" {...register("active")} className="form-check-input" />
                        <div className="option-description--container">
                            <p className="input-title">{`احراز هویت کاربر مهمان ( پیامک باقی مانده ${124}) `}</p>
                            <p><span>icon</span>در صورت فعال بودن این گزینه ,قبل از ورود کاربران به آزمون شماره موبایل و نام آنها دریافت میشود که در قسمت کاربران آزمون نمایش داده میشود هزینه ارسال پیامک احراز هویت با شما میباشد <span>اطلاعات بیشتر</span></p>
                        </div>
                    </div>
                    <div className="exam-form-option--container">
                        <input type="checkbox"  {...register("leave")} className="form-check-input" />
                        <div className="option-description--container">
                            <p className="input-title" >ترک آزمون فعال باشد</p>
                            <p><span>icon</span>در صورت فعال بودن این گزینه ,در صورتی که کاربر آزمون را ترک کند زمان باقی مانده آزمون برای وی محفوظ تا زمانی که بتواند وارد آزمون شود</p>
                        </div>
                    </div>
                </div>
                <button type="submit">submit</button>
            </div>
        </form>
    )
}

export default AddingExamForm1