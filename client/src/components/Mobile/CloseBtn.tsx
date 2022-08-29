import React from 'react';
import {CloseBtn} from '../../interfaces/index'

export default function CloseBtn({ setIsVisibleLevels }: CloseBtn) {
  return (
    <button
      type="button"
      onClick={() => setIsVisibleLevels(false)}
      className="game-process-page-levels_close-btn"
    >
      <span>&times;</span>
    </button>
  );
}
