import React, {useState, useEffect} from "react";

export const Header = ({size, text}) => {
  
    if(size === 'mid') {
        return(
            <h3 className="header header_mid">{text}</h3>
        )
    }

    if(size === "big"){
        return(
            <h1 className="header header_big">{text}</h1>
        )
    }

    return null;
}