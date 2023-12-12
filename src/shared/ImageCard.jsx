import React, { useEffect } from "react";

function ImageCard({ title, desc, buttonText, className, right }) {

  const style = {
    right: `${right}%`,
  }
  

  useEffect(() => {
    const button = document.querySelectorAll(".buttonGroup");
    const buttonAnimation = document.querySelectorAll(".buttonAnimation");

    button.forEach((button) => {
      button.addEventListener("mouseover", () => {
        buttonAnimation.forEach((animation) => {
          animation.childNodes[0].classList.add("line-active");
          animation.childNodes[1].classList.add("circle-active");
        });
      });
      button.addEventListener("mouseout", () => {
        buttonAnimation.forEach((animation) => {
          animation.childNodes[0].classList.remove("line-active");
          animation.childNodes[1].classList.remove("circle-active");
        });
      });
    }
    );
    
  }, [])

  
 

  return (
    <div className={className}>
      <h2>{title}</h2>
      <p>{desc}</p>
      <div className="buttonGroup">
        <button>{buttonText}</button>
        <div className="buttonAnimation" style={style}>
          <div id="line" className="line"></div>
          <div id="circle" className="circle">
            <div className="circle2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageCard;
