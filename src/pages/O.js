import React from 'react'
import P from './P';

export default function O(propes) {
  return (
      <>
    <h1>O{propes.friendName12}</h1>
    <P friendName13={propes.friendName12}/>
    </>
  );
}