import img_left from '../../components/assets/Img.jpg';
import img_right from '../../components/assets/Img_right.jpg';
import './Feedback.style.scss';

const Feedback = () => {
  return (
    <div className={'feedback'}>
      <div className={'feedback__content'}>
        <div>
          <h3 className={'feedback__content__title'}>
            Що говорять про нас ті хто вже з нами
          </h3>
          <div className={'feedback__table'}>
            <div className={'feedback__table__left'}>
              <img src={img_left} alt={'Anna`s'} />
              <div className={'table__content'}>
                <div className={'table__content__title'}>
                  <h6>Анна Карпенко</h6>
                  <p>Зелений кооператив</p>
                </div>
                <div className={'table__content__feedback'}>
                  <p>
                    Моя родина і я вдячні компанії "Розбудова кооперативів" за
                    чудовий досвід співпраці. Вони допомогли нам зреалізувати
                    нашу мрію про власний будинок. Професійний підхід, висока
                    якість робіт і швидке виконання завдань - це те, чому можна
                    довіряти. Рекомендую з усієї душі!
                  </p>
                </div>
              </div>
            </div>
            <div className={'feedback__table__right'}>
              <img src={img_right} alt={'Ivan`s'} />
              <div className={'table__content'}>
                <div className={'table__content__title'}>
                  <h6>Іван Мазейнюк</h6>
                  <p>Спільнота комфорту</p>
                </div>
                <div className={'table__content__feedback'}>
                  <p>
                    Приємно співпрацювати з командою "Розбудова кооперативів".
                    Вони допомогли нам обрати оптимальні рішення для нашого
                    будівництва і професійно втілили наші ідеї в реальність.
                    Результат перевершив наші очікування, і ми залишаємось дуже
                    задоволені співпрацею.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={'feedback__scroll'}>
            <div className={'feedback__scroll__point_selected'}></div>
            <div className={'feedback__scroll__point'}></div>
            <div className={'feedback__scroll__point'}></div>
            <div className={'feedback__scroll__point'}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Feedback };
