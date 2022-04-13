import React from "react";

const WrapperCard = ({ phones }) => {
    return (
        <ul>
            {phones.map((phone) => {
                return <>
                    <li>{phone.name}</li>
                    <li>{phone.snippet}</li>
                </>
            })}
        </ul>
    )
}

export default WrapperCard;