import React from "react"

type InputBox = {
    
    'handle_click':(event:React.ChangeEvent<HTMLInputElement>)=> void
}

export const InputBox = (props:InputBox)=>{
    const handleInputChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
        console.log(event.target.value);
    }
    return <input type="text" onChange={handleInputChange}/>
}