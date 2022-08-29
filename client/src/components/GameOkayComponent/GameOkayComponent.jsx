import React from 'react';
import okay from '../../assets/images/hand.png';

export default function GameOkayComponent() {
  return (
    <div className="okay-component">
      <img src={okay} alt="hand-okay" className="okay-component-img" />
    </div>
  );
}
