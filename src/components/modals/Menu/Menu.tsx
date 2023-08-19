import './Menu.style.scss'
import {NavigationList} from "../../../constants/navigate";
import {Link} from "react-router-dom";
import {Button} from "../../parts/Button/Button";

type MenuProps={
    isOpen:boolean;
    onClose:()=>void
}

const Menu = ({isOpen, onClose}:MenuProps)=>{

    if(!isOpen) return null


    return(
            <div className="modal-overlay">
                <div className="modal">
                    <nav>
                        <ul className={'modal__navigation__list'}>
                            {
                                NavigationList.map((item)=>(
                                    <li key={item.name} onClick={onClose}><Link to={item.link}>{item.name}</Link></li>
                                ))
                            }
                        </ul>
                    </nav>
                    <Button text={'Закрити'} onClick={onClose} primary/>
                </div>
            </div>
    )
}

export {Menu}