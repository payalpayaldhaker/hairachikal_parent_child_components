import React from 'react'
import D from './D'

export default function C(propes) {
  return (
      <>
    <h1>C{propes.friendName2}</h1>
        <D friendName3={ propes.friendName2}/>
        
    </>
  )
}
