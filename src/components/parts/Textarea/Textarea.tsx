
import './Textarea.style.scss'

type TextareaProps={
    placeholder:string
    error?:boolean
    onChange?:()=>void
    value?:string
}

const Textarea = ({placeholder, value='', onChange=()=>{}, error=false}:TextareaProps)=>{
    return(
        <>
            <textarea placeholder={placeholder} value={value} onChange={onChange} className={`${error && 'error'}`}/>
        </>
    )
}

export {Textarea}