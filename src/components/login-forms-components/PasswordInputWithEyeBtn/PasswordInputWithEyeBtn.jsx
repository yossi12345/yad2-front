import { useState } from "react"
import "./PasswordInputWithEyeBtn.scss"
import {AiFillEyeInvisible,AiFillEye} from "react-icons/ai"
import { handleCheckPasswordValidity } from "./functions"
import PasswordPopover from "./PasswordPopover"
function PasswordInputWithEyeBtn({label="סיסמה",popoverNeeded=false,isPasswordVisible,setIsPasswordVisible,showError=true,errors,setErrors,name="password"}){
    const [passwordPopoverParams,setPasswordPopoverParams]=useState({
        show:false,
        isLengthValid:false,
        isContentValid:false
    })
    return (
        <div className="login-input-label-container">
            <label>{label}</label>
            <div className="login-input-container">
                <div>
                    {popoverNeeded&&passwordPopoverParams.show&&
                        <PasswordPopover {...passwordPopoverParams}/>
                    }
                    {popoverNeeded?
                        <input type={isPasswordVisible?"text":"password"} 
                            placeholder="הקלדת סיסמה"
                            name={name}
                            className={errors.password!==""?"input-error":""}
                            onFocus={(event)=>{handleCheckPasswordValidity(event,setPasswordPopoverParams)}}
                            onChange={(event)=>{
                                handleCheckPasswordValidity(event,setPasswordPopoverParams)
                                if (errors.password!==""){
                                    setErrors({
                                        ...errors,
                                        password:""
                                    })
                                }
                            }}
                            onBlur={()=>{
                                setPasswordPopoverParams({
                                    ...passwordPopoverParams,
                                    show:false
                                })
                            }}
                        />:
                        <input type={isPasswordVisible?"text":"password"}
                            placeholder="הקלדת סיסמה"
                            name={name}
                            className={errors.password!==""?"input-error":""}
                            onChange={()=>{
                                if (errors.password!==""){
                                    setErrors({
                                        ...errors,
                                        password:""
                                    })
                                    console.log("HH")
                                }
                        }}/>
                    }
                    <button type="button" 
                        className="password-eye-icon-btn"
                        onClick={()=>setIsPasswordVisible((prev)=>!prev)}
                    >
                    {isPasswordVisible?
                        <AiFillEyeInvisible size={24}/>:
                        <AiFillEye size={24}/>
                    }
                    </button>
                </div>
                {showError&&errors.password!==""&&<div className="error">{errors.password}</div>}
            </div>
        </div>
    )
}
export default PasswordInputWithEyeBtn