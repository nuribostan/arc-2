import React from 'react'
import propTypes from 'prop-types'

function MiniBox({width, height, marginTop, backgroundColor}) {


  const style = {
      display: "flex",
      position: "relative",
      width: `${width}`,
      height: `${height}`,
      backgroundColor: `${backgroundColor}`,
      display: "block",
      marginTop: `${marginTop}}rem`,
    }


  return (
    <div className='miniBox' style={style}>
    </div>
  )
}

MiniBox.defaultProps = {
  width: "80%",
  height: "200px",
  marginTop: "200px",
  backgroundColor: "#1b1b1b",
}

MiniBox.propTypes = {
  width: propTypes.string,
  height: propTypes.string,
  marginTop: propTypes.string,
  backgroundColor: propTypes.string,
}


export default MiniBox