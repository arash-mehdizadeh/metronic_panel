import { useState } from 'react';

import MenuLinks from '../../../components/menuLink/menuLinks';

import { ReactComponent as ArrowMenu } from '../../../assets/icons/arrows/arr079.svg';
import { ReactComponent as DashboardSvg } from '../../../assets/icons/menu/dashboard.svg';
import { ReactComponent as ChartIcon } from '../../../assets/icons/generals/chart.svg';
import { ReactComponent as Add } from '../../../assets/icons/generals/add.svg';

import '../addUserToExamList/addUserToExamList.scss'

const AddTeacherToExamList = () => {

    const [hoverMenu, setHoverMenu] = useState(false);
    const [activeMenu, setActiveMenu] = useState(false);
    const openMenu = () => {
        document.getElementById("sidebar").style.width = "265px";
    }
    const closeMenu = () => {
        document.getElementById("sidebar").style.width = "75px";
    }
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
                        <h3>ایجاد آزمون / بارم دهی سوالات</h3>
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
                                        <p>دانلود نمونه</p>
                                    </div>
                                    <div className='primary-box box-2'>
                                        <span><ChartIcon /></span>
                                        <p>افزودن با اکسل</p>
                                    </div>
                                </div>
                            </div>
                            <div className='transaction-filter-box'>
                                <div className='add-user-side-buttons' style={{ justifyContent: "space-evenly" }}>
                                    <p className='primary-box box-3'>افزودن همه</p>
                                    <p className='primary-box box-4'>حذف همه</p>
                                </div>
                                <div className='filter-input-container'>
                                    <p>جستوجو :</p>
                                    <div className='margin-b-16'>
                                        <input type="test" className='input-handler' placeholder='افزودن و جستوجو مدرس ...' />
                                    </div>
                                    <p>+ ایجاد مدرس</p>
                                    <p>i اگر کاربر را نیافته اید ,آن را ایجاد کنید</p>
                                </div>
                                <p id='reset-btn'>حذف فیلتر ها</p>
                            </div>
                        </div>
                        <div className="transaction-list-container active-primary-box">
                            <div className='added-user-list--title'>لیست کاربران</div>
                            
                            <ul className='added-user-list--container'>
                                <li className='added-user-list'>
                                    <div className='added-user-list-id-details'>
                                        <span className='no-handler'>{1} #</span>
                                        <div className='added-user-list-details '>
                                            <p>قاف علی</p>
                                            <p>09123456789</p>
                                        </div>
                                    </div>
                                    <span className='delete-btn'>X</span>
                                </li>

                            </ul>
                        </div>
                    </div>
                </main>
            </div>
        </div >
    )
}

export default AddTeacherToExamList;