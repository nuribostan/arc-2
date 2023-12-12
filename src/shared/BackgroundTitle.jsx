import React from "react";
import { PropTypes } from "prop-types";

function BackgroundTitle({ bgTitle, fontSize, top, left,color }) {
  const bgTitleStyle = {
    position: "absolute",
    top: `${ top }%`,
    left: `${ left }%`,
    display: "flex",
    justifyContent: "center",
    fontSize: `${ fontSize }rem`,
    fontWeight: "700",
    textTransform: "uppercase",
    color: `${ color }`,
    zIndex: "0",
  };

  return (
    <h1 className="bgTitle" style={bgTitleStyle}>
      {bgTitle}
    </h1>
  );
}

BackgroundTitle.defaultProps = {
  fontSize: "35",
  top: "0",
  left: "10",
  color: "#212121",
};

BackgroundTitle.propTypes = {
  bgTitle: PropTypes.string.isRequired,
  fontSize: PropTypes.string,
  top: PropTypes.string,
  left: PropTypes.string,
};


export default BackgroundTitle;
