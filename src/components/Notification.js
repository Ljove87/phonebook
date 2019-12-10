import React from "react";

const Notificaiton = ({message}) => {
    if(message === null) {
        return null
    }    
    
    return (
        <div className="error">
            {message}
        </div>
    )
}

export default Notificaiton