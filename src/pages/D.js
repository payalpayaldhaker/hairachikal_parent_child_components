import React from 'react'
import E from './E';
export default function D(propes) {
  return (
      <>
    <h1>D{propes.friendName3}</h1>
    <E friendName1={propes.friendName3}/>
    </>
  )

}
