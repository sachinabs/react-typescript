import { ContainerStyles } from "../types/type.dt"

export const Container = (props: ContainerStyles) => {
    return (
        <div style={props.styles} className="mainDiv">
            <span > This is sachin abs learning React & Ts </span>
        </div>
    )
}