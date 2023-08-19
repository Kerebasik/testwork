import { Button } from '../../components/parts/Button/Button';

import './Experience.style.scss';

const Experience = () => {
  return (
    <div className={'experience'} id={'experience'}>
      <div className={'experience__content'}>
        <div className={'experience__title'}>
          <h3>У нас є 15 років досвіду у будівництві</h3>
        </div>
        <div className={'experience__subtitle'}>
          <p>
            Станьте і ви частиною неперевершеного проекту, що забезпечує
            екологічне, комфортне та сучасне життя!
          </p>
        </div>
        <div className={'experience__button'}>
          <Button text={'Приєднатися до нас'} secondary />
        </div>
      </div>
    </div>
  );
};

export { Experience };
