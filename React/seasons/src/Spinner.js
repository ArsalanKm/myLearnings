import React from "react";

const Snipper = (props) => {

    return (<div className="ui active dimmer">
            <div className="ui text loader">{props.message}</div>
        </div>


    )
}
Snipper.defaultProps = {
    message: 'Loading...'
}
export default Snipper