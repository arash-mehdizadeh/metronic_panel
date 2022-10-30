import { ReactComponent as Arrow2 } from '../../assets/icons/arrows/arr074.svg';
import './menuLinks.scss'

const MenuLinks = (props) => {
    return (
        <div className='menu-link'>
            <span className='menu-icon'>
                {props.icon}
            </span>
            <div className={`menu-link-detail`}>
                <p>{props.title}</p>
                <Arrow2 />
            </div>
        </div>
    )
}

export default MenuLinks