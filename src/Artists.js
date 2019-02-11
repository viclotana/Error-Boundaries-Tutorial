import React from 'react'

function Artists({artistName}) {
  if (artistName === 'peruzzi') {
    throw new Error ('not performing tonight!')
  }
  return (
    <div>
       {artistName}
    </div>
  )
}

export default Artists

