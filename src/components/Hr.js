import React from 'react'

function Hr({ color, height, width}) {
  return (
    <hr
      style={{
        backgroundColor: color,
        width: width,
        height: height
      }}
    />
  )
}

export default Hr