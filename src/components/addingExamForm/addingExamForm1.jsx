
import { DatePicker, DateTimePicker } from "react-advance-jalaali-datepicker";


import './addingExam.scss';
import { useForm } from "react-hook-form";
import { useEffect, useMemo } from "react";

const AddingExamForm1 = () => {

    const user = {
        type :"test"
    }

    const { register, reset, setValue, handleSubmit } = useForm({
        defaultValues: useMemo(() => {
            // console.log("User has changed");
            return user ;
        }, [])
    });

    // useEffect(() => {
    //     if (userData) {
    //         setValue([
    //             { name: userData.name }, 
    //             { phone: userData.phone }
    //         ]);
    //     }
    // }, [userData]);
    return (
        <form onSubmit={handleSubmit(d => console.log(d))}>
            <div className='form-1-container'>
                <div className='exam-form-details'>
                    <div className='form-input--container'>
                        <p className='form-title'>عنوان آزمون :</p>
                        <input type="text" {...register("title")}  className='form-input' placeholder='عنوان آزمون را وارد کنید' />
                    </div>
                    <div className='form-input--container'>
                        <p className='form-title'>تعداد سوالات :</p>
                        <input type="text" className='form-input' {...register("number_of_question")} placeholder='تعداد سوالات را وارد کنید ...' />
                    </div>
                    <div className='form-input-radio--container'>
                        <p className='form-title'>نوع آزمون :</p>
                        <div className='radio--container'>
                            <label className='input-radio-title'>
                                <input className='form-check-input custom-checkbox' {...register("type")} value="test" type="radio" />
                                تستی
                            </label>
                            <label className='input-radio-title'>
                                <input className='form-check-input custom-checkbox' {...register("type")} value="descriptive" type="radio" />
                                تشریحی بارم دار
                            </label>
                        </div>
                    </div>
                    <div className='form-input-radio--container'>
                        <p className='form-title'>نوع آزمون تستی :</p>
                        <div className='radio--container'>
                            <label className='input-radio-title'>
                                <input className='form-check-input custom-checkbox' {...register("test_type")} value={"rank"} type="radio" />
                                رتبه ای (رقابتی)
                            </label>
                            <label className='input-radio-title'>
                                <input className='form-check-input custom-checkbox' {...register("test_type")} value={"score"} type="radio" />
                                بارم دار (نمره دار)
                            </label>

                        </div>
                    </div>
                    <div className='form-input-radio--container'>
                        <p className='form-title'>ضریب منفی تست :</p>
                        <div className='radio--container'>

                            <label className='input-radio-title'>
                                <input className='form-check-input custom-checkbox' {...register("negetiveAnswer")} type="radio" />
                                ندارد
                            </label>
                            <label className='input-radio-title'>
                                <input className='form-check-input custom-checkbox' {...register("negetiveAnswer")} type="radio" />
                                <select placeholder='انتخاب مدیر آموزشگاه' {...register("negative_point")} className='select-form-input' > {/* add register in here */}
                                    <option className='factorForm--option' value="3/1">3 به 1</option>
                                    <option className='factorForm--option' value="">1 به 1</option>
                                    <option className='factorForm--option' value="">5 به 1</option>
                                </select>
                            </label>
                        </div>
                    </div>
                    <div className='form-input-radio--container'>
                        <p className='form-title'>تاریخ برگزاری آزمون :</p>
                        <div className='radio--container'>
                            <label className='input-radio-title'>
                                <input className='form-check-input custom-checkbox' {...register("examDate")} type="radio" />
                                هر تاریخی
                            </label>
                            <label className='input-radio-title'>
                                <input className='form-check-input custom-checkbox' {...register("examDate")} type="radio" />
                                <DatePicker
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
                                <input className='form-check-input custom-checkbox' {...register("userJoinTime")} type="radio" />
                                هر ساعتی
                            </label>
                            <label className='input-radio-title'>
                                <input className='form-check-input custom-checkbox' {...register("userJoinTime")} type="radio" />
                                <span id='dateTime-span'><span>از ساعت</span><DateTimePicker id='dateTimePicker' preSelected='انتخاب ساعت' {...register("start_time_from")} /><span>تا ساعت</span><DateTimePicker preSelected='انتخاب ساعت' id='dateTimePicker' {...register("start_time_to")}  />تاریخ برگزاری آزمون</span>
                            </label>
                        </div>
                    </div>
                    <div className='form-input-radio--container'>
                        <p className='form-title'>زمان پایان آزمون :</p>
                        <div className='radio--container'>

                            <label className='input-radio-title'>
                                <input className='form-check-input custom-checkbox' {...register("examDeadline")} type="radio" />
                                نامحدود
                            </label>
                            <label className='input-radio-title'>
                                <input className='form-check-input custom-checkbox' {...register("examDeadline")} type="radio" />
                                ساعت <DateTimePicker id='dateTimePicker' preSelected='انتخاب ساعت'  {...register("end_time")}/> تاریخ برگزاری آزمون
                            </label>
                            <label className='input-radio-title'>
                                <input className='form-check-input custom-checkbox' {...register("examDeadline")} type="radio" />
                                تا<input type="text" id='form-input--show-exam-result' placeholder='60' />دقیقه بعد از ورود کاربر به آزمون
                            </label>
                        </div>
                    </div>
                    <div className='form-input-radio--container'>
                        <p className='form-title'>نمایش کارنامه تستی :</p>
                        <div className='radio--container'>

                            <label className='input-radio-title'>
                                <input className='form-check-input custom-checkbox' {...register("show_result")} value={"no_display"} type="radio" />
                                عدم نمایش
                            </label>
                            <label className='input-radio-title'>
                                <input className='form-check-input custom-checkbox' {...register("show_result")} value="after_quiz_end " type="radio" />
                                پس از اتمام آزمون
                            </label>
                            <label className='input-radio-title'>
                                <input className='form-check-input custom-checkbox' {...register("show_result")} value="range"  type="radio" />
                                در تاریخ <DatePicker id='dateTimePicker' preSelected='انتخاب تاریخ' {...register("show_result_from")} /> ساعت <DateTimePicker id='dateTimePicker' preSelected='انتخاب ساعت' {...register("show_result_to")} />
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