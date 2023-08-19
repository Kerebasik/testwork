import logo from '../../components/assets/logo.png';
import { NavigationList } from '../../constants/navigate';
import './Header.style.scss';
import burger_menu from '../../components/assets/burger_menu.png';
import { Menu } from '../../components/modals/Menu/Menu';
import { useState } from 'react';

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
          <ul className={'header__navigate__list'}>
            {NavigationList.map((item, index) => (
              <li className={'list__item'} key={item.name + index}>
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
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
