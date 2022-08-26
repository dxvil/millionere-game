import React, {useState, useEffect} from "react";

export const Header = ({key, size, text}) => {
    if(size === 'mid') {
        return(
            <h3 key={key} className="header header_mid">{text}</h3>
        )
    }

    if(size === "big"){
        return(
            <h1 className="header header_big">{text}</h1>
        )
    }

    return null;
}