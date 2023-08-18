import logo from '../../components/assets/logo.png'
import {NavigationList} from "../../constants/navigate";
import './Header.style.scss'
import {Link} from "react-router-dom";
import burger_menu from '../../components/assets/burger_menu.png'

const Header = () => {
  return (
    <header className={'header'}>
        <div className={'header__content'}>
            <img src={logo} alt={'Company logo'}/>
            <nav className={'header__navigate'}>
                <ul className={'header__navigate__list'}>
                    {
                        NavigationList.map((item, index)=>(
                            <li className={'list__item'} key={item.name+index}><Link to={item.link}>{item.name}</Link></li>
                        ))
                    }
                </ul>
                <div className={'header__navigate__burger-menu'}>
                    <img src={burger_menu} alt={'burger menu'}/>
                </div>
            </nav>
        </div>
    </header>
  );
};

export { Header };
