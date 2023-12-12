import React from "react";
import Button from "../shared/Button";
import BackgroundTitle from "../shared/BackgroundTitle";

function About() {
  return (
    <div className="about-Container">
      <div className="about-Content">
        <BackgroundTitle bgTitle="About"/>
        <div className="content-Box">
          <div className="content-image">
            <img
              className="content-img"
              src="https://i.hizliresim.com/1q4hspc.jpg"
              alt=""
            />
            <img
              className="overlay"
              src="https://i.hizliresim.com/r3d8t12.png"
              alt=""
            />
          </div>
          <div className="content-Desc">
            <h1>About Tunahan Yaşar Fıstık</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae delectus necessitatibus est error quam? Dignissimos
              vitae quisquam temporibus mollitia nobis! Quis, enim magnam
              reiciendis placeat dolore fugiat illum voluptas reprehenderit?
            </p>
            <div className="socialMedia">
              <a href="#">
                <img src="https://i.hizliresim.com/ozut6uw.png" alt="" />
                Follow on Instagram
              </a>
              <a href="#">
                <img src="https://i.hizliresim.com/8qzh9po.png" alt="" />
                Follow on Twitter
              </a>
              <a href="#">
                <img src="https://i.hizliresim.com/ay2d862.png" alt="" />
                Follow on Linkedin
              </a>
              <a href="#">
                <img src="https://i.hizliresim.com/lvm3rbm.png" alt="" />
                Contact on Gmail
              </a>
            </div>
            <Button text="Read More" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
