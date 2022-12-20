type PersonProps = {
    name: {
        'first_name': string,
        'last_name': string
    }
}


export const Person = (props:PersonProps) => {
    return (
        <div>
            <p>{props.name.first_name} {props.name.last_name} </p>
        </div>
    )
}