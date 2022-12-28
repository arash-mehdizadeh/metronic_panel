import { useState } from 'react';

import MenuLinks from '../components/menuLink/menuLinks';

import { ReactComponent as ArrowMenu } from '../assets/icons/arrows/arr079.svg';
import { ReactComponent as DashboardSvg } from '../assets/icons/menu/dashboard.svg';
import { ReactComponent as Profile } from '../assets/icons/menu/Profile.svg';
import { ReactComponent as Room } from '../assets/icons/menu/Display.svg';
import { ReactComponent as Wallet } from '../assets/icons/menu/Wallet.svg';
import { ReactComponent as Message } from '../assets/icons/menu/Message.svg';
import { ReactComponent as Video } from '../assets/icons/menu/Video.svg';
import { ReactComponent as Cart } from '../assets/icons/menu/Cart.svg';
import { ReactComponent as Exam } from '../assets/icons/menu/exam.svg';
import sampleUser from '../assets/images/user.png'
// import { ReactComponent as Add } from '../assets/icons/generals/add.svg'

import '../App.scss';

const Layout = (props) => {

    const [hoverMenu, setHoverMenu] = useState(false);
    const [activeMenu, setActiveMenu] = useState(false);
    const openMenu = () => {
        document.getElementById("sidebar").style.width = "265px";
    }
    const closeMenu = () => {
        document.getElementById("sidebar").style.width = "75px";
    }

    const userToken = {
        src:"",
        token:"",
        username:"nigger"
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
                        <MenuLinks title={"کاربران"} icon={<Profile width={"24"} height="24" />} />
                        <MenuLinks title={"اتاق ها"} icon={<Room />} />
                        <MenuLinks title={"اتاق های ضبط شده"} icon={<Video />} />
                        <MenuLinks title={"خرید ,تمدید و ارتقاء"} icon={<Cart />} />
                        <MenuLinks title={"ارسال پیامک"} icon={<Message />} />
                        <MenuLinks title={"سوابق مالی"} icon={<Wallet />} />
                        <MenuLinks title={"آزمون ها"} icon={<Exam width={"24"} height="24"/>} />
                    </div>
                </div>
                {/* header side */}
                <header>
                    <div className='user-details'>
                        <ul>
                            <li>{ userToken.name ? userToken.name : "وارد حساب خود شوید" }</li>
                            <li>{ userToken.src ? <img src={userToken.src} alt="" className='userprofile'  /> : <img src={sampleUser} alt="" className='userprofile' /> }</li>
                        </ul>
                    </div>
                    <div className='page-details'>
                        <h2>ایجاد آزمون</h2>
                        
                    </div>
                </header>
                {/* main secetion */}
                <main className={`component-container ${activeMenu ? "main-full" : ''}`}>
                    {
                        props.children
                    }
                </main>
            </div>
        </div >
    )
}

export default Layout