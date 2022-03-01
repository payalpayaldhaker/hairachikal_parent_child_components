import React from 'react'
import N from './N'

export default function M(propes) {
  return (
      <>
    <h1>M{propes.friendName10}</h1>
    <N friendName11 ={propes.friendName10}/>
    </>
  );
}