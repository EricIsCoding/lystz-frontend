import React from 'react'


const StarButton = (props) => {

    return(
        <button onClick={props.handleClick}>
            Add star
        </button>
    )
}

export default StarButton;