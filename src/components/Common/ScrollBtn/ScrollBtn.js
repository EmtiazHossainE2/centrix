import React, { useState } from "react";
import { BsArrowUpCircle } from "react-icons/bs";
import "./ScrollBtn.css";

const ScrollBtn = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 500) {
      setVisible(true);
    } else if (scrolled <= 500) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <span className="scroll-btn">
      <BsArrowUpCircle
        className="hover:text-[#02e0b8] "
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
      />
    </span>
  );
};

export default ScrollBtn;
