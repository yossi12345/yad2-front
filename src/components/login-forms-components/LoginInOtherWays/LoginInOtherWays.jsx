import "./LoginInOtherWays.scss"
import {FcGoogle} from "react-icons/fc"
import {FaApple} from "react-icons/fa"
function LoginInOtherWays({isSignIn=false}){
    return (
        <div className="login-in-other-ways-container">
            <div className="text-seperation">
                <div></div>
                <span>או התחברו דרך</span>
                <div></div>
            </div>
            <div className="google-and-apple-btns-container">
                <button type="button">
                    <FcGoogle size={21}/>
                    <span>גוגל</span>
                </button>
                <button type="button">
                    <FaApple size={21}/>
                    <span>אפל</span>
                </button>
            </div>
            <div>
                {isSignIn?"אין לך חשבון?":"כבר יש לך חשבון?"}
                <a href={isSignIn?"/sign-up-step1":"/sign-in"}>
                    {isSignIn?"להרשמה":"להתחברות"}
                </a>
            </div>
        </div>
    )
}
export default LoginInOtherWays