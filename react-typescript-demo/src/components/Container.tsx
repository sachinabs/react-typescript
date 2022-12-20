type ContainerStyles ={
    "styles":React.CSSProperties
}


export const Container = (props:ContainerStyles) =>{
    return (
        <div style={props.styles} className="mainDiv">
            <span > This is sachin abs learining React & Ts </span>
        </div>
    )
}