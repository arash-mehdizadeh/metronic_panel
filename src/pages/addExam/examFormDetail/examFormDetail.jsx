import { useState } from 'react';

import MenuLinks from '../../../components/menuLink/menuLinks';

import { ReactComponent as ArrowMenu } from '../../../assets/icons/arrows/arr079.svg';
import { ReactComponent as DashboardSvg } from '../../../assets/icons/menu/dashboard.svg';
import { ReactComponent as ChartIcon } from '../../../assets/icons/generals/chart.svg';
import { ReactComponent as Add } from '../../../assets/icons/generals/add.svg'

import AddingExamForm1 from '../../../components/addingExamForm/addingExamForm1';

import '../../../App.scss';

const ExamFormDetail = () => {

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
                            <li>user name</li>
                            <li>profile pic</li>
                        </ul>
                    </div>
                    <div className='page-details'>
                        <h2>ایجاد آزمون</h2>
                        
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
                                        <p>ایجاد آزمون</p>
                                    </div>
                                    <div className='primary-box box-2'>
                                        <span><ChartIcon /></span>
                                        <p>طراحان آزمون</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="transaction-list-container active-primary-box">
                            <AddingExamForm1 />
                        </div>
                    </div>
                </main>
            </div>
        </div >
    )
}

export default ExamFormDetail