import {Routes} from "./routes";
import type {NavList} from "../types/lists";


const NavigationList:Array<NavList> =[
    {
        link:Routes.ROOT,
        name:"Про нас"
    },
    {
        link:Routes.ROOT,
        name:"Наші проєкти"
    },
    {
        link:Routes.ROOT,
        name:"Приєднуйтесь до нас"
    },
    {
        link:Routes.ROOT,
        name:"Зв'яжіться з нами"
    }
]

export {NavigationList}