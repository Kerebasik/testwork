
import './Button.style.scss'

type CommonButtonProps={
    text:string
    onClick?:()=>void
    type?:"button" | "submit" | "reset" | undefined
}

type PrimaryButtonProps= CommonButtonProps & {
    primary:boolean
    secondary?:never
}

type SecondaryButtonProps= CommonButtonProps&{
    secondary:boolean
    primary?:never
}

type ButtonProps = PrimaryButtonProps | SecondaryButtonProps;

const Button = ({ type = undefined,text, primary=false, onClick=()=>{}, secondary=false}:ButtonProps)=>{
    return(
        <div>
            <button type={type} onClick={onClick} className={`${ primary && 'primary'} ${ secondary && 'secondary'}`}>
                {text}
            </button>
        </div>
    )
}

export {Button}