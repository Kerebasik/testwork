import logo from '../../components/assets/logo.png'
import './Footer.style.scss'
import {NavigationList} from "../../constants/navigate";


const Footer = () => {
  return (
    <footer className={'footer'}>
        <div className={'footer__content'}>
            <img src={logo} alt={'Company logo'}/>
            <div className={'footer__list'}>
                <ul>
                    {
                        NavigationList.map((item, index)=>{
                            return <li key={item.name+index}><a href={item.link}>{item.name}</a></li>
                        })
                    }
                </ul>
            </div>
        </div>
    </footer>
  );
};

export { Footer };
