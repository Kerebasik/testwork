

import './Case.style.scss'
import {Status} from "../../components/parts/Status/Status";
import {Button} from "../../components/parts/Button/Button";
import house from "../../components/assets/gallery.png"

const Case = ()=>{
    return(
        <div className={'case'}>
            <div className={'case__content'}>
                <div className={'case__content__menu'}>
                    <div className={'line'}></div>
                    <p className={'case__content__menu__item_selected'}>Зелений кооператив</p>
                    <p className={'case__content__menu__item'}>Спільнота комфорту</p>
                    <p className={'case__content__menu__item'}>Екологічний Оазис</p>
                    <p className={'case__content__menu__item'}>Беспечне майбутне</p>
                    <p className={'case__content__menu__item'}>Сучасний Вибір</p>
                </div>
                <div className={'case__content__data'}>
                    <div className={'case__content__data__left'}>
                        <div className={'case__content__data__left__header'}>
                            <div>
                                <Status text={'Завершено'} process={'success'}/>
                            </div>
                            <h3>Зелений кооператив:<br/>
                                Створення екологічної спільноти
                            </h3>
                            <p>Компанія "Розбудова кооперативів" успішно реалізувала проєкт "Зелений кооператив", що забезпечив створення екологічної спільноти. Резиденти кооперативу заощаджують на комунальних послугах, активно взаємодіють між собою та сприяють збереженню довкілля. Цей проєкт став прикладом сталого розвитку та популяризації екологічних ініціатив у будівництві.</p>
                        </div>

                        <Button text={'Дізнатися більше'} primary/>

                    </div>
                    <div className={'case__content__data__right'}>
                        <img src={house} alt={'house'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {Case}