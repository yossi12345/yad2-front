import "./LoginFormWrapper..scss"
import {SlArrowLeft} from "react-icons/sl"
import {useNavigate} from "react-router-dom"
function LoginFormWrapper({children,submitBtnContent="המשך",componentsAfterSubmitBtn,onSubmit}){
    const navigate=useNavigate()
    return (
        <div className="login-form-wrapper-container">
            <div className="logo-container">
                <img src="/logo.svg" alt=""/>
            </div>
            <form className="login-form-wrapper" onSubmit={(event)=>{
                event.preventDefault()
                onSubmit(event)
            }}>
                <button className="back-arrow" type="button" onClick={()=>{navigate(-1)}}>
                    <SlArrowLeft size={21}/>
                </button>
                {children}
                <button type="submit" className="submit-button">{submitBtnContent}</button>
                {componentsAfterSubmitBtn}
            </form>
            <div>
                <p>
                    לקנות מהר,
                    <br/>למכור מהר.
                    <br/>ויש לנו אחלה
                    <br/>כלים לזה.
                </p>
                <div className="images-container">
                    <div>
                        <img src="/profile-icon.svg" alt=""/>
                        <div>איזור אישי</div>
                    </div>
                    <div>
                        <img src="/rocket-icon.svg" alt=""/>
                        <div>
                            פרסום<br/>
                            מודעה
                        </div>
                    </div>
                    <div>
                        <img src="/chat-icon.svg" alt=""/>
                        <div>צ'אט</div>
                    </div>
                    <div>
                        <img src="/bell-icon.svg" alt=""/>
                        <div>התראות</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LoginFormWrapper