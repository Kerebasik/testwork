import './OurWork.style.scss';
import { Button } from '../../components/parts/Button/Button';

const OurWork = () => {
  return (
    <div className={'our-work'} id={'our-work'}>
      <div className={'our-work__content'}>
        <div className={'our-work__content__header'}>
          <div className={'our-work__content__header__title'}>
            <h3>Розбудова кооперативів</h3>
          </div>
          <div className={'our-work__content__header__subtitle'}>
            <p>
              Поєднуємо постачальників будматеріалів зі своїми споживачами та
              логістикою.
            </p>
          </div>

          <Button text={'Дізнатися більше'} primary />
        </div>
      </div>
    </div>
  );
};

export { OurWork };
