import React from "react"
import ReactDOM from 'react-dom';

import './adminPurchaseModal.scss';

const BackDrop = (props) => {
    return <div className='modalBackDrop' onClick={props.onConfirm} ></div>
}

const AdminPurchase = (props) => {
    return (
        <div className="adminPurchase-modal--container">
            <div className="adminPurchase-modal--exit-btn" onClick={props.onConfirm} >X</div>
            <div className="adminPurchase-modal--header-container">
                <div className="adminPurchase-modal--header">
                    <p>نام مدیر</p>
                    <p>نوع</p>
                    <p>سرویس</p>
                    <p>دوره</p>
                </div>
                <div className="adminPurchase-modal--info-container">
                    <div className="adminPurchase-modal--admin-info">
                        userID
                    </div>
                    <div className="adminPurchase-modal--type">
                        userID
                    </div>
                    <div className="adminPurchase-modal--service">
                        userID
                    </div>
                    <div className="adminPurchase-modal--period">
                        userID
                    </div>
                </div>
            </div>
        </div>
    )
}
const AdminPurchaseModal = (props) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<BackDrop onConfirm={props.onConfirm} />, document.getElementById("backdrop-root"))}
            {ReactDOM.createPortal(<AdminPurchase onConfirm={props.onConfirm} />, document.getElementById("overlayAdminPurchaseModal-root"))}
        </React.Fragment>
    )
}

export default AdminPurchaseModal