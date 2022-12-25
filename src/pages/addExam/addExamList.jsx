
import { ReactComponent as ChartIcon } from '../../assets/icons/generals/chart.svg';
import { ReactComponent as Add } from '../../assets/icons/generals/add.svg';
import { ReactComponent as Edit } from '../../assets/icons/generals/Edit.svg';
import { ReactComponent as Delete } from '../../assets/icons/generals/Delete.svg';

import '../../App.scss';
import Layout from '../../layout/layout';
import SideBars from '../../components/sideBars/SideBars';


const SuperUser = () => {

    return (
        <Layout>
            <div className='transaction-container'>
                <div className='transaction-record-sidebox'>
                    <SideBars />
                    <div className='transaction-filter-box'>
                        <div className='filter-input-container'>
                            <p>جستجو :</p>
                            <div>
                                <input type="text" className='input-handler' placeholder=' جستوجو آزمون با نام یا لینک ...' />
                            </div>
                        </div>
                        <p id='reset-btn'>حذف فیلتر ها</p>
                    </div>
                </div>
                <div className="transaction-list-container active-primary-box">
                    {/* <div className='thead'> */}
                    <table>
                        <thead>
                            <tr>
                                <th className='table-header'>#</th>
                                <th className='table-header'><p>نام آزمون</p></th>
                                <th className='table-header'><p>نوع آزمون</p></th>
                                <th className='table-header'><p>تاریخ برگزاری</p></th>
                                <th className='table-header'><p>سوالات</p></th>
                                <th className='table-header'><p>کاربران آزمون</p></th>
                                <th className='table-header'><p>لینک کاربری</p></th>
                                <th className='table-header'><p>لینک مهمان</p></th>
                                <th className='table-header'><p>احراز هویت مهمان</p></th>
                                <th className='table-header'><p>وضعیت</p></th>
                                <th className='table-header'><p>نتایج</p></th>
                                <th className='table-header'><p>عملیات</p></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='tbody'>
                                <td className='table-body'>1</td>
                                <td className='table-body'><p>abcd</p></td>
                                <td className='table-body'><p>تستی</p></td>
                                <td className='table-body'><p>1401/10/01</p></td>
                                <td className='table-body color-purple'><p>ویرایش</p></td>
                                <td className='table-body color-purple'><p>اضافه</p></td>
                                <td className='table-body color-purple'><p>کپی</p></td>
                                <td className='table-body color-purple'><p>کپی</p></td>
                                <td className='table-body color-purple'><div className='auth-field'><input type={"checkbox"} /> نمایش</div></td>
                                <td className='table-body color-purple'><p>فعال</p></td>
                                <td className='table-body'><p className='button'>مشاهده</p></td>
                                <td className='table-body'>
                                    <div className='operation'>
                                        <p className='preview-text'>
                                            پیشنمایش
                                        </p>
                                        <div className='opration-icons'>
                                            <div><Delete /></div  >
                                            <div><Edit /></div>
                                            {/* <div></div> */}
                                        </div>
                                    </div>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                    {/* </div> */}

                </div>
            </div>
        </Layout>
    )
}

export default SuperUser