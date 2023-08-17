import './WithUs.style.scss'
import video_icon from '../../components/assets/video with worker.png'
import car_icon from '../../components/assets/car_icon.png'
import hand_icon from '../../components/assets/hand_icon.png'
import puzzle_icon from '../../components/assets/puzzle_icon.png'
import {Icon} from "../../components/parts/Icon/Icon";

type TableContent = {
    icon:string,
    title:string
    subtitle:string
}

const tables:Array<TableContent> = [
    {
        icon:car_icon,
        title:'Логістика без зайвих клопотів',
        subtitle:'Наша команда забезпечує плавний та безпечний хід робіт завдяки високопрофесійній логістичній підтримці. Ви можете бути впевнені, що ваш будівельний проект отримає своєчасні та якісні матеріали, а процес будівництва пройде без зайвих клопотів.'
    },
    {
        icon:puzzle_icon,
        title:'Поєднання ресурсів для майбутнього',
        subtitle:'Ми віримо, що справжній успіх полягає у спільності. Тому ми створюємо місце, де можливості розкриваються, а співпраця стає ключем до досягнення взаємного росту та процвітання.'
    },
    {
        icon:hand_icon,
        title:'Створюємо разом',
        subtitle:'Ми прагнемо бачити результати своєї спільної роботи. Ваша довіра та участь є основою нашого успіху. Ми цінуємо кожного клієнта, і ваша задоволеність - наша найбільша нагорода.'
    }
]

const WithUs = ()=>{
    return(
        <div className={'with-us'}>
            <div className={'with-us__content'}>
                <div className={'with-us__content__title__table'}>
                    <div className={'table__left'}>
                        <h3>
                            Чому варто бути з нами?
                        </h3>
                        <p>
                            Ми - злагоджена команда, що поєднує постачальників будматеріалів зі своїми споживачами та логістикою. Наша ідея полягає у тому, щоб створити універсальний механізм, який дозволить нашим клієнтам забудовувати мрію про свої оселі з легкістю та задоволенням.
                        </p>
                    </div>
                    <div className={'table__right'}>
                        <img src={video_icon} alt={'video with worker'}/>
                    </div>
                </div>
                <div className={'with-us__content__tables'}>
                    {
                        tables.map((item, index)=>(
                            <div key={item.title+index} className={'table'}>
                                <div className={'table__header'}>
                                    <Icon img={item.icon} />
                                    <h5 className={'table__header__title'}>
                                        {item.title}
                                    </h5>
                                </div>
                                <div className={'table__content'}>
                                    <p>
                                        {item.subtitle}
                                    </p>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export {WithUs}