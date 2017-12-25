import React from 'react'

const IMAGE_PATH = process.env.PUBLIC_URL + '/assets/images'
const Image = ({src, alt, style}) =>
  <img
    style={style}
    alt={alt || src} 
    src={`${IMAGE_PATH}/${src}`} />

export default Image