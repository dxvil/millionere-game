import React from "react";

export const MenuBtn = ({setIsVisibleLevels}) => {
     return(
        <button onClick={() => setIsVisibleLevels(true)}
        className="game-process-page-levels_menu-btn">
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
        </button>
     )
}