
import './Input.style.scss'

type InputProps={
    placeholder:string
    value?:string
    error?:boolean
    onChange?:()=>void,
}

const Input =({placeholder, value='', error=false, onChange=()=>{}}:InputProps)=>{
    return(
        <>
            <input placeholder={placeholder} value={value} onChange={onChange} className={`${error && 'error'}`} />
        </>
    )
}

export {Input}