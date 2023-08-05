import {useState} from "react"
import LoginFormWrapper from "../LoginFormWrapper/LoginFormWrapper"
import "./SignUpStep1.scss"
import PasswordInputWithEyeBtn from "../PasswordInputWithEyeBtn/PasswordInputWithEyeBtn"
import MailInput from "../MailInput"
import LoginInOtherWays from "../LoginInOtherWays/LoginInOtherWays"
import { handleSubmit } from "./function"
function SignUpStep1(){
    const [isPasswordVisible,setIsPasswordVisible]=useState(false)
    const [errors,setErrors]=useState({mail:"",password:""})
    return (
        <LoginFormWrapper componentsAfterSubmitBtn={<LoginInOtherWays/>}
            onSubmit={(event)=>{
                handleSubmit(event,setErrors)
            }}
        >
            <img src="/signup-icon.svg" alt="" className="sign-up-person"/>
            <div className="sign-up-title">היי, נעים להכיר</div>
            <MailInput
                errors={errors}
                setErrors={setErrors}
            />
            <PasswordInputWithEyeBtn
                popoverNeeded={true}
                isPasswordVisible={isPasswordVisible} 
                setIsPasswordVisible={setIsPasswordVisible}
                errors={errors}
                setErrors={setErrors}
                showError={false}
            />
            <PasswordInputWithEyeBtn 
                label="אימות סיסמה"
                isPasswordVisible={isPasswordVisible} 
                setIsPasswordVisible={setIsPasswordVisible}
                errors={errors}
                setErrors={setErrors}
                name="passwordValidation"
            />
            {/* <span className="forget-password">שכחתי סיסמה</span> */}
        </LoginFormWrapper>
    )
}
export default SignUpStep1