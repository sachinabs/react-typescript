type GreetProps = {
    "name": string,
    "messageCount"?: number,
    "isLogedIN": Boolean,
}
export const Greet = (props: GreetProps) => {
    // const {messageCount = 0 } = props 
    let messageCount;
    
    if (props.messageCount == undefined) {
        messageCount = 0
    }
    
    else { messageCount = props.messageCount }

    return (
        <div>
            <h2>
                {props.isLogedIN ? ` Hello..! ${props.name}, You have ${messageCount} messages to check.` : `Welcome Gust...!`}
            </h2>
        </div>
    )
}