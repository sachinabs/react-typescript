type StatusProps = {
    'status' : 'loading' | 'success' | 'error'
}


export const Status = (props:StatusProps) => {
    let message;

    if (props.status === 'loading') {
        message = 'loading'
    }
    else if( props.status ==='success'){
        message = 'Data fetched succefully..!'
    }
    else if (props.status === 'error') {
        message = 'Error when fetching data.'
    }

    return (
        <div>
           <h2>Status: {message } </h2>
        </div>
    )
}