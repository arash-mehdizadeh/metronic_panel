import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import ApexCharts from 'apexcharts'

import MenuLinks from './components/menuLink/menuLinks';

import { ReactComponent as ArrowMenu } from './assets/icons/arrows/arr079.svg';
import { ReactComponent as DashboardSvg } from './assets/icons/menu/dashboard.svg';
import { ReactComponent as ChartIcon } from './assets/icons/generals/chart.svg';
import { ReactComponent as Add } from './assets/icons/generals/add.svg';
import { ReactComponent as InfoIcon } from './assets/icons/generals/gen045.svg';

import './App.scss';
import AdminPurchaseList from './components/adminPurchaseList/AdminPurchaseList';
import SuperAdminFactorForm from './components/superAdminFactorForm/superAdminFactorForm';


const App = () => {

    var ok = true;

    const [hoverMenu, setHoverMenu] = useState(false);
    const [activeMenu, setActiveMenu] = useState(false);
    const openMenu = () => {
        document.getElementById("sidebar").style.width = "265px";
    }
    const closeMenu = () => {
        document.getElementById("sidebar").style.width = "75px";
    }

    var barOption = {
        series: [{
            name: 'Net Profit',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 55, 57, 56, 61, 58, 63, 60, 66, 55, 57, 56, 61, 58, 63, 60, 66]
        }
            // , {
            //     name: 'Revenue',
            //     data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
            // },
            //  {
            //     name: 'Free Cash Flow',
            //     data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
            // }
        ],
        options: {
            chart: {
                type: 'bar',
                height: 350
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '55%',
                    endingShape: 'rounded'
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            xaxis: {
                categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
            },
            yaxis: {
                title: {
                    text: '$ (thousands)'
                }
            },
            fill: {
                opacity: 1
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return "$ " + val + " thousands"
                    }
                }
            }
        },
    };


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
                        <MenuLinks title={"??????????????"} icon={<DashboardSvg />} />
                        <MenuLinks title={"???????????? (???????????????? ????)"} icon={<DashboardSvg />} />
                        <MenuLinks title={"??????????????"} icon={<DashboardSvg />} />
                        <MenuLinks title={"???????? ????"} icon={<DashboardSvg />} />
                        <MenuLinks title={"???????? ?????? ?????? ??????"} icon={<DashboardSvg />} />
                        <MenuLinks title={"???????? ?????? ?????????? ??????????????"} icon={<DashboardSvg />} />
                        <MenuLinks title={"????????????"} icon={<DashboardSvg />} />
                        <MenuLinks title={"???????? ???????? ????????????"} icon={<DashboardSvg />} />
                        <MenuLinks title={"?????????????? ????"} icon={<DashboardSvg />} />
                        <MenuLinks title={"???????? ???????????? ?? ?????????? ????????"} icon={<DashboardSvg />} />
                        <MenuLinks title={"?????? ????????????"} icon={<DashboardSvg />} />
                        <MenuLinks title={"????????"} icon={<DashboardSvg />} />
                        <MenuLinks title={"?????????? ????"} icon={<DashboardSvg />} />
                        <MenuLinks title={"?????????? ????"} icon={<DashboardSvg />} />
                        <MenuLinks title={"?????????? ????????"} icon={<DashboardSvg />} />

                        {/* <MenuLinks title={"?????????? ??????????"} icon={<DashboardSvg />} />
                        <MenuLinks title={"???????? ,?????????? ?? ????????????"} icon={<DashboardSvg />} />
                        <MenuLinks title={"?????????? ????????"} icon={<DashboardSvg />} />
                        <MenuLinks title={"?????????? ????"} icon={<DashboardSvg />} /> */}
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
                        <h2>?????????? ????????</h2>
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
                                    <p>???????? ?????? ????????</p>
                                    <ReactApexChart options={options.options} series={options.series} type="area" height={200} />
                                </div>
                                <div className='transaction-buttons-container'>
                                    <div className='primary-box box-1'>
                                        <span><ChartIcon /></span>
                                        <p>?????????? ????</p>
                                    </div>
                                    <div className='primary-box box-2'>
                                        <span><Add /></span>
                                        <p>???????????? ?????????? ????????</p>
                                    </div>
                                </div>
                            </div>
                            <div className='transaction-filter-box'>
                                <div className='filter-input-container'>
                                    <p>?????????? :</p>
                                    <div>
                                        <input type="text" className='input-handler' placeholder=' ?????????? ???????? ???? ?????? ?? ???????????? ?? ?????? ????????????????...' />
                                    </div>
                                </div>
                                <div className='filter-input-container'>
                                    <p>?????????? ???? :</p>
                                    <div className='double-inputs-contanier'>
                                        <input type="text" className='input-handler' placeholder='???? ??????????' />
                                        <input type="text" className='input-handler' placeholder='???? ??????????' />
                                    </div>
                                </div>
                                <div className='filter-input-container'>
                                    <input type="text" className='input-handler' placeholder='?????????? ????????????' />
                                </div>
                                <p id='reset-btn'>?????? ?????????? ????</p>
                            </div>
                        </div>
                        <div className="transaction-list-container">
                            <SuperAdminFactorForm />
                            {/* <ReactApexChart options={barOption} series={barOption.series} type="bar" height={350} /> */}

                            {/* <div className='header-list'>
                            <ul>
                                <li>?????? ????????</li>
                                <li>?????? ????????????????</li>
                                <li>??????????</li>
                                <li>????????</li>
                                <li>??????????</li>
                                <li>?????????????? ????????</li>
                            </ul>
                        </div>
                        <div className='admin-list-container'>
                            <AdminPurchaseList />
                            <AdminPurchaseList />
                            <AdminPurchaseList />
                            <AdminPurchaseList />
                            <AdminPurchaseList />
                        </div> */}
                        </div>
                    </div>
                </main>
            </div>
        </div >
    )
}

export default App