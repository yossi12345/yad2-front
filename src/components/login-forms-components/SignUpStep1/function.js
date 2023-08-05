export function handleSubmit(event,setErrors){
    const inputsValues=Object.fromEntries(new FormData(event.target))
    const newErrors={mail:"",password:""}
    if (inputsValues.mail==="")
        newErrors.mail="לא לשכוח את המייל"
    else if (!(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(inputsValues.mail)))
        newErrors.mail="משהו לא תקין במייל, אולי התפספס @?"
    if (inputsValues.password==="")
        newErrors.password="לא לשכוח להזין סיסמה"
    else if (!(/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$/.test(inputsValues.password)))
        newErrors.password="נבקש שהסיסמה תכלול אותיות באנגלית וספרות"
    else if (inputsValues.password.length<8||inputsValues.password.length>20)
        newErrors.password="נבקש סיסמה באורך 8-20 תווים"
    else if (inputsValues.password!==inputsValues.passwordValidation)
        newErrors.password="הסיסמאות לא זהות"
    if (newErrors.password!==""||newErrors.mail!==""){
        setErrors(newErrors)
        return
    }
    sessionStorage.setItem("newUserMail",inputsValues.mail)
    sessionStorage.setItem("newUserPassword",inputsValues.password)
}