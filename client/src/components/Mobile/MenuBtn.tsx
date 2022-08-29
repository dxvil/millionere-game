import React from 'react';
import {MenuBtn} from '../../interfaces/index'

export default function MenuBtn({ setIsVisibleLevels }: MenuBtn) {
  return (
    <button
      type="button"
      onClick={() => setIsVisibleLevels(true)}
      className="game-process-page-levels_menu-btn"
    >
      <div className="bar1" />
      <div className="bar2" />
      <div className="bar3" />
    </button>
  );
}
