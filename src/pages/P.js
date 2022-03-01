import React from 'react'
import Q from './Q';

export default function p(propes) {
  return (
      <>
    <h1>P{propes.friendName13}</h1>
    <Q friendName14={propes.friendName13}/>
    </>
  );
}