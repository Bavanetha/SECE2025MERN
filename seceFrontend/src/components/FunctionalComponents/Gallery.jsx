//props

import React from 'react'

{/*we can use different names for props*/}
const Gallery = (props) => {
  return (
    <div>
        {/*if there is no value it will not show any error */}
      <h1>This is a {props.page} page</h1>
      <img src="dark.jpg" alt = ""  />
      <p>Image is {props.image}</p>
    </div>
  )
}

export default Gallery