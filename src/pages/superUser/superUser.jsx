import { useState } from 'react';

import MenuLinks from '../../components/menuLink/menuLinks';

import { ReactComponent as ArrowMenu } from '../../assets/icons/arrows/arr079.svg';
import { ReactComponent as DashboardSvg } from '../../assets/icons/menu/dashboard.svg';
import { ReactComponent as ChartIcon } from '../../assets/icons/generals/chart.svg';
import { ReactComponent as Add } from '../../assets/icons/generals/add.svg';

import '../../App.scss';

const SuperUser = () => {
    const [hoverMenu, setHoverMenu] = useState(false);
    const [activeMenu, setActiveMenu] = useState(false);
    const openMenu = () => {
        document.getElementById("sidebar").style.width = "265px";
    }
    const closeMenu = () => {
        document.getElementById("sidebar").style.width = "75px";
    }

    const tableHeader = ["#", "عنوان تکلیف", "زمان ارسال", "زمان تحویل", " تکلیف", " تکلیف کاربران", "لینک کاربری", "وضعیت", "نتایج", "عملیات"]

    return (
        <div className="app_container" >
            <div className="container" style={{ paddingRight: activeMenu ? "75px" : "265px" }}>
                <div className='sidebar' onMouseEnter={() => { activeMenu && openMenu(); activeMenu && setHoverMenu(false) }}
                    onMouseLeave={() => { activeMenu && closeMenu(); activeMenu && setHoverMenu(true) }} id='sidebar'>
                    <div className='sidebar-header'>
                        <div style={{ display: `${hoverMenu ? "none" : ""}` }}>ICON</div>
                        <div onClick={() => setActiveMenu(perv => !perv)} className={`menu-arrow ${activeMenu ? "active-arrow" : "staible-menu"}`}>
                            <ArrowMenu />
                        </div>
                    </div>
                    <div className="menu-link-container">
                        <MenuLinks title={"داشبورد"} icon={<DashboardSvg />} />
                        <MenuLinks title={"مدیران (آموزشگاه ها)"} icon={<DashboardSvg />} />
                        <MenuLinks title={"کاربران"} icon={<DashboardSvg />} />
                        <MenuLinks title={"اتاق ها"} icon={<DashboardSvg />} />
                        <MenuLinks title={"اتاق های ضبط شده"} icon={<DashboardSvg />} />
                        <MenuLinks title={"اتاق های درحال برگزاری"} icon={<DashboardSvg />} />
                        <MenuLinks title={"سرورها"} icon={<DashboardSvg />} />
                        <MenuLinks title={"دسته بندی سرورها"} icon={<DashboardSvg />} />
                        <MenuLinks title={"اطلاعیه ها"} icon={<DashboardSvg />} />
                        <MenuLinks title={"سطوح دسترسی و تخصیص مقام"} icon={<DashboardSvg />} />
                        <MenuLinks title={"فرم مشاوره"} icon={<DashboardSvg />} />
                        <MenuLinks title={"بلاگ"} icon={<DashboardSvg />} />
                        <MenuLinks title={"سرویس ها"} icon={<DashboardSvg />} />
                        <MenuLinks title={"تخفیف ها"} icon={<DashboardSvg />} />
                        <MenuLinks title={"سوابق مالی"} icon={<DashboardSvg />} />

                        {/* <MenuLinks title={"ارسال پیامک"} icon={<DashboardSvg />} />
                        <MenuLinks title={"خرید ,تمدید و ارتقاء"} icon={<DashboardSvg />} />
                        <MenuLinks title={"سوابق مالی"} icon={<DashboardSvg />} />
                        <MenuLinks title={"آزمون ها"} icon={<DashboardSvg />} /> */}
                    </div>
                </div>
                {/* header side */}
                <header>
                    <div className='user-details'>
                        <ul>
                            <li>search</li>
                            <li>status</li>
                            <li>notifs</li>
                            <li>message</li>
                            <li>dashboard</li>
                            <li>dark/light</li>
                            <li>profile pic</li>
                        </ul>
                    </div>
                    <div className='page-details'>
                        <h2>سوابق مالی</h2>
                        <div className='filter-btn'>
                            <p>filter</p>
                            <p>makin</p>
                        </div>
                    </div>
                </header>
                {/* main secetion */}
                <main className={`component-container ${activeMenu ? "main-full" : ''}`}>
                    <div className='transaction-container'>
                        <div className='transaction-record-sidebox'>
                            <div className='transaction-detail-container'>
                                <div className='transaction-buttons-container deactive-relative-box'>
                                    <div className='primary-box box-1'>
                                        <span><Add /></span>
                                        <p>ایجاد تکیلف</p>
                                    </div>
                                    <div className='primary-box box-2'>
                                        <span><ChartIcon /></span>
                                        <p>طراحان تکیلف</p>
                                    </div>
                                </div>
                            </div>
                            <div className='transaction-filter-box'>
                                <div className='filter-input-container'>
                                    <p>جستجو :</p>
                                    <div>
                                        <input type="text" className='input-handler' placeholder=' جستوجو تکلیف با نام یا لینک ...' />
                                    </div>
                                </div>
                                {/* <div className='filter-input-container'>
                                <p>فیلتر ها :</p>
                                <div className='double-inputs-contanier'>
                                    <input type="text" className='input-handler' placeholder='از تاریخ' />
                                    <input type="text" className='input-handler' placeholder='تا تاریخ' />
                                </div>
                            </div>
                            <div className='filter-input-container'>
                                <input type="text" className='input-handler' placeholder='وضعیت پرداخت' />
                            </div> */}
                                <p id='reset-btn'>حذف فیلتر ها</p>
                            </div>
                        </div>
                        <div className="transaction-list-container active-primary-box">
                            
                            <table>
                                <tr>
                                    <th>#</th>
                                    <th>عنوان تکلیف</th>
                                    <th>زمان ارسال</th>
                                    <th>زمان تحویل</th>
                                    <th>تکلیف</th>
                                    <th>کاربران تکلیف</th>
                                    <th>لینک کاربری</th>
                                    <th>وضعیت</th>
                                    <th>نتایج</th>
                                    <th>عملیات</th>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>مهندسی روانشناسی تکنیکال</td>
                                    <td>
                                        <p>56/11/23</p>
                                        <p>18:00</p>
                                    </td>
                                    <td>
                                        <p>56/11/23</p>
                                        <p>18:00</p>
                                    </td>
                                    <td>ویرایش</td>
                                    <td>حذف و اضافه</td>
                                    <td>کپی لینک</td>
                                    <td>فعال</td>
                                    <td>مشاهده</td>
                                    <td>
                                        <p>پیشنمایش</p>
                                        <p>see edit msg</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>مهندسی روانشناسی تکنیکال</td>
                                    <td>
                                        <p>56/11/23</p>
                                        <p>18:00</p>
                                    </td>
                                    <td>
                                        <p>56/11/23</p>
                                        <p>18:00</p>
                                    </td>
                                    <td>ویرایش</td>
                                    <td>حذف و اضافه</td>
                                    <td>کپی لینک</td>
                                    <td>فعال</td>
                                    <td>مشاهده</td>
                                    <td>
                                        <p>پیشنمایش</p>
                                        <p>see edit msg</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>مهندسی روانشناسی تکنیکال</td>
                                    <td>
                                        <p>56/11/23</p>
                                        <p>18:00</p>
                                    </td>
                                    <td>
                                        <p>56/11/23</p>
                                        <p>18:00</p>
                                    </td>
                                    <td>ویرایش</td>
                                    <td>حذف و اضافه</td>
                                    <td>کپی لینک</td>
                                    <td>فعال</td>
                                    <td>مشاهده</td>
                                    <td>
                                        <p>پیشنمایش</p>
                                        <p>see edit msg</p>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </main>
            </div>
        </div >
    )
}

export default SuperUser