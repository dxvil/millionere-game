import React from "react";

export const CloseBtn = ({setIsVisibleLevels}) => {
    return (
        <button onClick={() => setIsVisibleLevels(false)}
        className="game-process-page-levels_close-btn">
        <span>&times;</span>
        </button>
    )
}