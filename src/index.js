//style.css 건들지 않기
import "./styles.css";
const colors = ["red", "blue", "olive", "tomato", "skyblue"];
//colors 배열 생성

const body = document.querySelector("body");
const title = document.querySelector("h1");

//superEvevntHandler사용
const superEventHandler = {
  //Resize에 대한 event
  handleResize: function () {
    title.innerHTML = "You just resized!!!";
    title.style.color = colors[0];
  },

  //Click에 대한 event
  handleClick: function () {
    title.innerHTML = "That was a right click!!!";
    title.style.color = colors[1];
  },

  //Enter에 대한 event
  handleMouseEnter: function () {
    title.innerHTML = "The mouse is here!!!";
    title.style.color = colors[2];
  },

  //Leave에 대한 event
  handleMouseLeave: function () {
    title.innerHTML = "The mouse is gone!!!";
    title.style.color = colors[3];
  }
};

window.addEventListener("resize", superEventHandler.handleResize);
title.addEventListener("click", superEventHandler.handleClick);
title.addEventListener("mouseenter", superEventHandler.handleMouseEnter);
title.addEventListener("mouseleave", superEventHandler.handleMouseLeave);
