import logo from '../../components/assets/logo.png'
import './Footer.style.scss'
import {NavigationList} from "../../constants/navigate";
import {NavLink} from "react-router-dom";


const Footer = () => {
  return (
    <footer className={'footer'}>
        <div className={'footer__content'}>
            <img src={logo} alt={'Company logo'}/>
            <div className={'footer__list'}>
                <ul>
                    {
                        NavigationList.map((item, index)=>{
                            return <li className={'list__item'} key={item.name+index}><NavLink to={item.link}>{item.name}</NavLink></li>
                        })
                    }
                </ul>
            </div>
        </div>
    </footer>
  );
};

export { Footer };
