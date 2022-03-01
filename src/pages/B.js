import React from 'react'
import C from './C'

export default function B(propes) {
  return (
      <>
    <h1>B {propes.friendName}</h1>
    <C friendName2={propes.friendName}/>
    </>
  )
}
