
import { useForm } from 'react-hook-form';
import { DatePicker } from 'react-advance-jalaali-datepicker'

import './superAdminFactorForm.scss';

const SuperAdminFactorForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => console.log(data);

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='superAdmin-factorForm--container'>
                    <div className='factorForm-buyingInfo--container'>
                        <div className='buyingInfo--section'>

                            <div className='factorForm-input--container'>
                                <p className='form-title'>خریدار :</p>
                                <select placeholder='انتخاب مدیر آموزشگاه' className='factorForm-input' {...register("buyer")} >
                                    <option className='factorForm--option' value=""></option>
                                    <option className='factorForm--option' value=""></option>
                                    <option className='factorForm--option' value=""></option>
                                </select>

                            </div>
                            <div className='factorForm-input--container datePicker--container'>
                                <p className='form-title'>تاریخ خرید :</p>
                                {/* <input type="date" className='factorForm-input' {...register("buy_date")} /> */}
                                <DatePicker format="jYYYY/jMM/jDD" placeholder="انتخاب تاریخ" className='factorForm-input' {...register("buy_date")} />
                            </div>
                            <div className='factorForm-input--container'>
                                <p className='form-title'>مبلغ :</p>
                                <input type="text" placeholder='به تومان' className='factorForm-input' {...register("amount")} />
                            </div>
                            <div className='factorForm-input--container'>
                                <p className='form-title'>نوع :</p>
                                <div className='inputRadio--container'>
                                    <label className='inputRadio-title'>
                                        <input className='form-check-input' {...register("transaction_type")} type="radio" />
                                        خرید
                                    </label>
                                    <label className='inputRadio-title'>
                                        <input className='form-check-input' {...register("transaction_type")} type="radio" />
                                        تمدید
                                    </label>
                                    <label className='inputRadio-title'>
                                        <input className='form-check-input' {...register("transaction_type")} type="radio" />
                                        ارتقاء
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='receipt--section'>
                            <p>drag and drop</p>
                        </div>
                    </div>
                    <div className='factorForm-serviceOptions--container'>

                        <div className='form-serviceOption--section'>
                            <label className='form-checkbox--container'>
                                <input type="checkbox" className='form-checkbox-input'></input>
                                سرویس کلاس آنلاین بیگ بلو باتن :
                            </label>
                            {/* <p className='form-title'>سرویس کلاس آنلاین بیگ بلو باتن :</p> */}
                            <div className='form-option'>
                                <select placeholder='انتخاب مدیر آموزشگاه' className='factorForm-input' {...register("buyer")} >
                                    <option className='factorForm--option' value=""></option>
                                    <option className='factorForm--option' value=""></option>
                                    <option className='factorForm--option' value=""></option>
                                </select>
                                <select placeholder='انتخاب مدیر آموزشگاه' className='factorForm-input factorForm-period' {...register("buyer")} >
                                    <option className='factorForm--option' value=""></option>
                                    <option className='factorForm--option' value=""></option>
                                    <option className='factorForm--option' value=""></option>
                                </select>
                                <label className='form-checkbox--container'>
                                    <input type="checkbox" className='form-checkbox-input'></input>
                                    سرویس ضبط
                                </label>
                                <label className='form-checkbox--container'>
                                    <input type="checkbox" className='form-checkbox-input'></input>
                                    سرویس گارد روم
                                </label>
                            </div>
                        </div>
                        <div className='form-serviceOption--section'>
                            <label className='form-checkbox--container'>
                                <input type="checkbox" className='form-checkbox-input'></input>
                                سرویس کلاس آنلاین ادوبی کانکت :
                            </label>
                            <div className='form-option'>
                                <select placeholder='انتخاب مدیر آموزشگاه' className='factorForm-input' {...register("buyer")} >
                                    <option className='factorForm--option' value=""></option>
                                    <option className='factorForm--option' value=""></option>
                                    <option className='factorForm--option' value=""></option>
                                </select>
                                <select placeholder='انتخاب مدیر آموزشگاه' className='factorForm-input factorForm-period' {...register("buyer")} >
                                    <option className='factorForm--option' value=""></option>
                                    <option className='factorForm--option' value=""></option>
                                    <option className='factorForm--option' value=""></option>
                                </select>
                                <label className='form-checkbox--container'>
                                    <input type="checkbox" className='form-checkbox-input'></input>
                                    سرویس گارد روم
                                </label>
                            </div>
                        </div>

                        <div className='form-serviceOption--section'>
                            <label className='form-checkbox--container'>
                                <input type="checkbox" className='form-checkbox-input'></input>
                                سرویس وبینار بیگ بلو باتن :
                            </label>
                            <div className='form-option'>
                                <select placeholder='انتخاب مدیر آموزشگاه' className='factorForm-input' {...register("buyer")} >
                                    <option className='factorForm--option' value=""></option>
                                    <option className='factorForm--option' value=""></option>
                                    <option className='factorForm--option' value=""></option>
                                </select>
                                <label className='form-checkbox--container'>
                                    <input type="checkbox" className='form-checkbox-input'></input>
                                    سرویس گارد روم
                                </label>
                            </div>
                        </div>
                        <div className='form-serviceOption--section'>
                            <label className='form-checkbox--container'>
                                <input type="checkbox" className='form-checkbox-input'></input>
                                سرویس وبینار ادوبی کانکت :
                            </label>
                            <div className='form-option'>
                                <select placeholder='انتخاب مدیر آموزشگاه' className='factorForm-input' {...register("buyer")} >
                                    <option className='factorForm--option' value=""></option>
                                    <option className='factorForm--option' value=""></option>
                                    <option className='factorForm--option' value=""></option>
                                </select>
                                <label className='form-checkbox--container'>
                                    <input type="checkbox" className='form-checkbox-input'></input>
                                    سرویس گارد روم
                                </label>
                            </div>
                        </div>

                        <div className='form-serviceOption--section'>
                            <label className='form-checkbox--container'>
                                <input type="checkbox" className='form-checkbox-input'></input>
                                سرویس پیامک :
                            </label>
                            <div className='form-option'>
                                <select placeholder='انتخاب مدیر آموزشگاه' className='factorForm-input' {...register("buyer")} >
                                    <option className='factorForm--option' value=""></option>
                                    <option className='factorForm--option' value=""></option>
                                    <option className='factorForm--option' value=""></option>
                                </select>
                            </div>
                        </div>
                        <div className='form-serviceOption--section'>
                            <label className='form-checkbox--container'>
                                <input type="checkbox" className='form-checkbox-input'></input>
                                سرویس آزمون آنلاین :
                            </label>

                            <div className='form-option'>
                                <select placeholder='انتخاب مدیر آموزشگاه' className='factorForm-input' {...register("buyer")} >
                                    <option className='factorForm--option' value=""></option>
                                    <option className='factorForm--option' value=""></option>
                                    <option className='factorForm--option' value=""></option>
                                </select>
                            </div>
                        </div>
                        <div className='form-serviceOption--section'>
                            <label className='form-checkbox--container'>
                                <input type="checkbox" className='form-checkbox-input'></input>
                                سرویس تکلیف آنلاین :
                            </label>
                            <div className='form-option'>
                                <select placeholder='انتخاب مدیر آموزشگاه' className='factorForm-input' {...register("buyer")} >
                                    <option className='factorForm--option' value=""></option>
                                    <option className='factorForm--option' value=""></option>
                                    <option className='factorForm--option' value=""></option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='form-add-button--container'>
                    <button type='submit' id='form-add-button'>افزودن</button>
                </div>
            </form>
        </>
    )
}

export default SuperAdminFactorForm