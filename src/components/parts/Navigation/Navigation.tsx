import { NavigationList } from '../../../constants/navigate';

import './Navigation.style.scss';

type CommonMenuProps = {};

type PrimaryMenuProps = CommonMenuProps & {
  primary: boolean;
  secondary?: never;
};

type SecondaryMenuProps = CommonMenuProps & {
  primary?: never;
  secondary: boolean;
};

type NavigationProps = PrimaryMenuProps | SecondaryMenuProps;

const Navigation = ({
  secondary = false,
  primary = false,
}: NavigationProps) => {
  return (
    <ul className={'navigation'}>
      {NavigationList.map((item, index) => (
        <li className={'navigation__item'} key={item.name + index}>
          <a className={`navigation__item__link ${primary && 'navigation__item__link_primary'} ${secondary && 'navigation__item__link_secondary'}`} href={item.link}>
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export { Navigation };
