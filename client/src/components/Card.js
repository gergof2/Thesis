import React from 'react';
function Card({item, id, handleClick}){
    const itemClass = item.stat ? " active " + item.stat : "";

    return (
        <div className={"card" + itemClass} onClick={() => handleClick(id)}>
            <p alt="">{item.value}</p>
        </div>
    )
}

export default Card;