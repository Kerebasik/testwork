import { Input } from '../../components/parts/Input/Input';
import { Textarea } from '../../components/parts/Textarea/Textarea';
import { Button } from '../../components/parts/Button/Button';
import phone_icon from '../../components/assets/phone.png';
import mail_icon from '../../components/assets/mail.png';
import point__icon from '../../components/assets/point.png';
import './Questions.style.scss';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  RegularValidationForName,
  RegularValidationForPhone,
} from '../../constants/regExpForForm';
import type { QuestionForm } from '../../types/forms';
import { Controller } from 'react-hook-form';

const Questions = () => {
  const { control, watch, handleSubmit, reset } = useForm<QuestionForm>({
    defaultValues: {
      name: '',
      phone: '',
      question: '',
    },
  });

  const name = watch('name');
  const phone = watch('phone');
  const question = watch('question');

  const handleOnSubmit: SubmitHandler<QuestionForm> = () => {
    new Promise((resolve) => {
      console.log('Send data', name, phone, question);
      resolve('');
    })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        reset();
      });
  };

  return (
    <div className={'question-form'} id={'question-form'}>
      <div className={'question-form__content'}>
        <form onSubmit={handleSubmit(handleOnSubmit)}>
          <div className={'form__header'}>
            <h3 className={'form__title'}>Залишились питання?</h3>
            <p className={'form__subtitle'}>
              Заповніть форма у наші консультанти звяжуться з вами у найближчий
              час
            </p>
          </div>
          <div className={'form__inputs'}>
            <div className={'credentials'}>
              <Controller
                name='name'
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: 'Name is required',
                  },
                  pattern: {
                    value: RegularValidationForName,
                    message: 'Name is not valid',
                  },
                }}
                render={({ field, fieldState }) => (
                  <Input
                    placeholder={'Ім’я'}
                    value={field.value}
                    errorMessage={fieldState.error?.message}
                    error={!!fieldState.error?.message}
                    onChange={field.onChange}
                  />
                )}
              />
              <Controller
                name='phone'
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: 'Phone is required',
                  },
                  pattern: {
                    value: RegularValidationForPhone,
                    message: 'Phone is not valid',
                  },
                }}
                render={({ field, fieldState }) => (
                  <Input
                    placeholder={'Телефон'}
                    value={field.value}
                    errorMessage={fieldState.error?.message}
                    error={!!fieldState.error?.message}
                    onChange={field.onChange}
                  />
                )}
              />
            </div>
            <Controller
              name='question'
              control={control}
              rules={{
                required: {
                  value: true,
                  message: 'Question is required',
                },
              }}
              render={({ field, fieldState }) => (
                <Textarea
                  placeholder={'Ваше питання...'}
                  error={!!fieldState.error?.message}
                  onChange={field.onChange}
                  errorMessage={fieldState.error?.message}
                  value={field.value}
                />
              )}
            />
          </div>
          <div className={'form__button'}>
            <Button type={'submit'} text={'Відправити запит'} primary />
          </div>
        </form>
        <div className={'question-form__content__right'}>
          <div className={'contacts'}>
            <h5 className={'contacts__title'}>Наші контакти</h5>
            <div className={'contacts__data'}>
              <div className={'contacts__data__number'}>
                <div>
                  <img src={phone_icon} alt={'Phone icon'} />
                </div>{' '}
                8 800 657 59 81
              </div>
              <div className={'contacts__data__mail'}>
                <div>
                  <img src={mail_icon} alt={'Mail icon'} />
                </div>
                buildingcooperatives@mail.ua
              </div>
              <div className={'contacts__data__location'}>
                <div>
                  <img src={point__icon} alt={'Location point icon'} />
                </div>
                36231, Івано-Франківська область, місто Івано-Франківськ, вул.
                Прорізна, 81
              </div>
            </div>
          </div>
          <div className={'work-schedule'}>
            <h5 className={'work-schedule__title'}>Розклад роботи</h5>
            <div className={'work-schedule__data'}>
              <p>Пн - Пт : 10:00 - 20:00</p>
              <p>Сб - Нд : 10:00 - 18:00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Questions };
