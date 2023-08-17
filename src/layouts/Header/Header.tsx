import logo from '../../components/assets/logo.png'
import {NavigationList} from "../../constants/navigate";
import './Header.style.scss'

const Header = () => {
  return (
    <header className={'header'}>
        <div className={'header__content'}>
            <img src={logo} alt={'Company logo'}/>
            <nav className={'header__navigate'}>
                <ul className={'header__navigate__list'}>
                    {
                        NavigationList.map((item, index)=>{
                            return <li key={item.name+index}><a href={item.link}>{item.name}</a></li>
                        })
                    }
                </ul>
            </nav>
        </div>
    </header>
  );
};

export { Header };
