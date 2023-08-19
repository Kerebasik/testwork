import logo from '../../components/assets/logo.png';
import './Header.style.scss';
import burger_menu from '../../components/assets/burger_menu.png';
import { Menu } from '../../components/modals/Menu/Menu';
import { useState } from 'react';
import { Navigation } from '../../components/parts/Navigation/Navigation';

const Header = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <header className={'header'}>
      <div className={'header__content'}>
        <img src={logo} alt={'Company logo'} />
        <nav className={'header__navigate'}>
          <div className={'header__navigate__list'}>
            <Navigation primary />
          </div>
          <div className={'header__navigate__burger-menu'}>
            <img
              onClick={handleOpenModal}
              src={burger_menu}
              alt={'burger menu'}
            />
          </div>
          <Menu isOpen={openModal} onClose={handleCloseModal} />
        </nav>
      </div>
    </header>
  );
};

export { Header };
