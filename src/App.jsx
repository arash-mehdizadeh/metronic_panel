import { ReactComponent as ArrowMenu } from './assets/icons/arrows/arr079.svg';
import { ReactComponent as DashboardSvg } from './assets/icons/menu/dashboard.svg';
import { ReactComponent as ChartIcon } from './assets/icons/generals/chart.svg';
import { ReactComponent as Add } from './assets/icons/generals/add.svg';

import './App.scss';
import MenuLinks from './components/menuLink/menuLinks';
import { useState } from 'react';
import { hover } from '@testing-library/user-event/dist/hover';
import ApexCharts from 'apexcharts'
import ReactApexChart from 'react-apexcharts';


const App = () => {


    const [hoverMenu, setHoverMenu] = useState(false);
    const [activeMenu, setActiveMenu] = useState(false);
    const openMenu = () => {
        document.getElementById("sidebar").style.width = "265px";
    }
    const closeMenu = () => {
        document.getElementById("sidebar").style.width = "75px";
    }
    var options = {
        series: [{
            name: 'series1',
            data: [31, 40, 28, 51, 42, 109, 100]
        }],
        options: {
            chart: {
                type: 'area',
                height: 200,
                background: '#f1416c',
                toolbar: {
                    show: false,
                },

                dataLabels: {
                    enabled: true
                },
                stroke: {
                    curve: 'smooth'
                },
                xaxis: {
                    type: 'none',
                    // categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
                },
                
                tooltip: {
                    x: {
                        format: 'dd/MM/yy HH:mm'
                    },
                },
            },

            colors: ['#CB1C47'],


        }
    };

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
                                <div className="chart-container">
                                    <p>نمای کلی فروش</p>
                                    <ReactApexChart options={options.options} series={options.series} type="area" height={200} />
                                </div>
                                <div className='transaction-buttons-container'>
                                    <div className='primary-box box-1'>
                                        <span><ChartIcon /></span>
                                        <p>درآمد کل</p>
                                    </div>
                                    <div className='primary-box box-2'>
                                        <span><Add /></span>
                                        <p>افزودن سابقه مالی</p>
                                    </div>
                                </div>
                            </div>
                            <div className='transaction-filter-box'>
                                <div className='filter-input-container'>
                                    <p>جستجو :</p>
                                    <div>
                                        <input type="text" className='input-handler' placeholder=' جستجو مدیر با نام ، موبایل و نام آموزشگاه...' />
                                    </div>
                                </div>
                                <div className='filter-input-container'>
                                    <p>فیلتر ها :</p>
                                    <div className='double-inputs-contanier'>
                                        <input type="text" className='input-handler' placeholder='از تاریخ' />
                                        <input type="text" className='input-handler' placeholder='تا تاریخ' />
                                    </div>
                                </div>
                                <div className='filter-input-container'>
                                    <input type="text" className='input-handler' placeholder='وضعیت پرداخت' />
                                </div>
                                <p id='reset-btn'>حذف فیلتر ها</p>
                            </div>
                        </div>
                        <div className="transaction-list-container">
                            <div className='header-list'>
                                <ul>
                                    <li>نام مدیر</li>
                                    <li>نام آموزشگاه</li>
                                    <li>تاریخ</li>
                                    <li>مبلغ</li>
                                    <li>وضعیت</li>
                                    <li>اطلاعات خرید</li>
                                </ul>
                            </div>
                            <div></div>
                        </div>
                    </div>
                </main>
            </div>
        </div >
    )
}

export default App