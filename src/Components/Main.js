import React from "react";
import TextReveal from "./TextReveal";

// import { motion } from "framer-motion";

const Main = (props) => {
  return (
    <div className="main-container">
      <div className="content">
        <TextReveal />

        <h1 className="product-name">Fall Limited Edition Sneakers</h1>
        <p className="product-desc">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <div className="price-info">
          <div className="price">
            <span className="current-price">$125.00</span>
            <span className="discount">50%</span>
          </div>
          <div className="prev-price">$250.00</div>
        </div>
      </div>
      <div className="gallery"></div>
    </div>
  );
};

export default Main;
