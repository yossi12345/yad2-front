import { useState } from "react"
import {VscClose} from "react-icons/vsc"
function MailInput(props){
    const [isClearBtnVisible,setIsClearBtnVisible]=useState(false)
    const [mail,setMail]=useState("")
    return (
        <div className="login-input-label-container">
            <label>מייל</label>
            <div className="login-input-container">
                <div>
                    <input value={mail} placeholder="yourmail@email.co.il"
                        name="mail"
                        className={props.errors.mail!==""?"input-error":""}
                        onFocus={()=>{setIsClearBtnVisible(mail!=="")}}
                        onBlur={()=>{setIsClearBtnVisible(false)}}
                        onChange={(event)=>{
                            const input=event.target.value
                            setMail(input)
                            setIsClearBtnVisible(input!=="")
                            if (props.errors.mail!==""){
                                props.setErrors({
                                    ...props.errors,
                                    mail:""
                                })
                            }
                        }}
                    />
                    {isClearBtnVisible&&<button type="button" onMouseDown={(event)=>{
                        event.preventDefault()
                        setMail("")
                        setIsClearBtnVisible(false)
                    }}>
                        <VscClose size={27} color="gray"/>
                    </button>}
                </div>
                {props.errors.mail!==""&&<div className="error">{props.errors.mail}</div>}
            </div>
        </div>
   ) 
}
export default MailInput