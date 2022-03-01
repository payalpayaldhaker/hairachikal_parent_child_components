import React from 'react'
import R from './R';

export default function Q(propes) {
    return (
        <>
      <h1>Q{propes.friendName14}</h1>
      <R friendName15={propes.friendName14}/>
      </>
  );
}