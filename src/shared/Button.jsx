import React from 'react'
import { PropTypes } from 'prop-types'


function Button({text, width, color}) {

  const style = {
    width: `${width}rem`,
    backgroundColor: `${color}`,
  }

  return (
    <button style={style} className="readMore">{text}</button>
  )
}

Button.defaultProps = {
  width: "20",
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  width: PropTypes.string,
}

export default Button