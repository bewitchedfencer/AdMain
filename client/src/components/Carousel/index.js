import React from 'react';
import "./style.css";
import { Carousel } from "react-responsive-carousel";

export default () => (
  <Carousel autoPlay>
    <div>
      <img src="" />
      <p className="legend">Legend 1</p>
    </div>
    <div>
      <img src="" />
      <p className="legend">Legend 2</p>
    </div>
    <div>
      <img src="" />
      <p className="legend">Legend 3</p>
    </div>
    <div>
      <img src="" />
      <p className="legend">Legend 4</p>
    </div>
    
  </Carousel>
);
