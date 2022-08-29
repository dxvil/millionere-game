import React from 'react';
import {Header} from '../../interfaces/index'


export default function Header({ size, text }: Header) {
  if (size === 'mid') {
    return (
      <h3 className="header header_mid">{text}</h3>
    );
  }

  if (size === 'big') {
    return (
      <h1 className="header header_big">{text}</h1>
    );
  }

  return null;
}
