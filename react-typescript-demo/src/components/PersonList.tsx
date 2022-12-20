type PersonListProps = {
        name:{
            'first_name':string,
            'last_name':string
        }[]
}


export const PersonList = (props:PersonListProps) => {
    return (
        <div>
            {props.name.map(name =>{
                return( 
                    <h2 key={name.first_name}>{name.first_name} {name.last_name}</h2>
                )
            })}
        </div>
    )
}