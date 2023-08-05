import {IoIosArrowDown} from "react-icons/io"
function PasswordPopover({isContentValid,isLengthValid}){
    return (
        <div className="password-popover">
            <div>
                <h4>הסיסמה צריכה לכלול:</h4>
                <ul>
                    <li className={isLengthValid?"valid":""}>
                        <div>
                            <div></div>
                        </div> 
                        8-20 תווים
                    </li>
                    <li className={isContentValid?"valid":""}>
                        <div>
                            <div></div>
                        </div> 
                        אותיות באנגלית ומספרים
                    </li>
                </ul>
            </div>
            <div>
                <IoIosArrowDown size={20} color="#d3d3d3"/>
            </div>
        </div>
    )
}
export default PasswordPopover