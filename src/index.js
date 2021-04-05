import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/1500/510";
const img2 = "https://picsum.photos/1500/710?blur";
const img3 = "https://picsum.photos/1500/910?grayscale";

ReactDOM.render(
  <div>
    <h1 className="heading">Random Image Generator</h1>
    <img src={img} alt="random" />
    <img src={img2} alt="random-blur" />
    <img src={img3} alt="random-grayscale" />
  </div>,
  document.getElementById("root")
);
