export function handleCheckPasswordValidity(event,setPasswordPopover){
    const input=event.target.value
    setPasswordPopover({
        show:true,
        isLengthValid:input.length<=20&&input.length>=8,
        isContentValid:/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$/.test(input)
    })
}