import logo from '../../components/assets/logo.png';
import './Footer.style.scss';
import { Navigation } from '../../components/parts/Navigation/Navigation';

const Footer = () => {
  return (
    <footer className={'footer'}>
      <div className={'footer__content'}>
        <img src={logo} alt={'Company logo'} />
        <div className={'footer__list'}>
          <Navigation secondary />
        </div>
      </div>
    </footer>
  );
};

export { Footer };
