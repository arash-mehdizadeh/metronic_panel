import { useState } from "react"

import { ReactComponent as InfoIcon } from '../../assets/icons/generals/gen045.svg';
import AdminPurchaseModal from "../adminPurchaseModal/AdminPurchaseModal";

import './adminPurchaseList.scss';

const AdminPurchaseList = (props) => {
    const [purchaseModal, setPurchaseModal] = useState(false);
    
    const openPurchaseDetailModal = () => {
        setPurchaseModal(true)
    }

    const onConfirmHandler = () =>{
        setPurchaseModal(false);
    }

    const ok = true;

    return (
        <div className='admin-list'>
            {
                purchaseModal && <AdminPurchaseModal onConfirm={onConfirmHandler}/>
            }
            <div className='admin-detail'>
                <p>اسلام شادی</p>
                <p>09128569100</p>
            </div>
            <p className='academy-name'>آموزشگاه گلهای بهشت رنگارنگ همدان</p>
            <div className='purchase-date'>
                <p>1400-07-09</p>
                <p>04:20:00</p>
            </div>
            <p className='purchase-price'>{`${"14,500,000"} تومان`}</p>
            <p className={`purchase-status ${ok ? "status-ok" : "status-failed"} `}>{"موفق"}</p>
            <div className='purchase-detail' onClick={() => openPurchaseDetailModal()}><InfoIcon /></div>
        </div>
    )
}

export default AdminPurchaseList