import React from "react"

type ButtonProps = {
    'handle_click':(event:React.MouseEvent<HTMLButtonElement>,id:string)=> void
}

export const Button = (props:ButtonProps)=>{
    return <button onClick={event =>props.handle_click(event,"mybtn")}>Click Here</button>
}