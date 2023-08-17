import {Experience} from "../../../layouts/Experience/Experience";
import {Feedback} from "../../../layouts/Feedback/Feedback";
import {Questions} from "../../../layouts/Questions/Questions";
import {WithUs} from "../../../layouts/WithUs/WithUs";
import {Case} from "../../../layouts/Case/Case";
import {OurWork} from "../../../layouts/OurWork/OurWork";

const Main = ()=>{
    return(
        <>
            <OurWork/>
            <WithUs/>
            <Case/>
            <Experience/>
            <Feedback/>
            <Questions/>
        </>
    )
}

export {Main}