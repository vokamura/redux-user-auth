import React from 'react';

export default props => {
    // console.log("Props: ", props);
    return(
        <ul className="nav nav-tabs justify-content-center">
            {props.children}   
        </ul>
    );
}