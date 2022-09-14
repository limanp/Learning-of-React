import React from "react";
import style from "./Profile_Info.module.css";

const Description = (props) => {
  return (
    <div>
      <div>
        <img
          src="https://static5.depositphotos.com/1037262/521/i/450/depositphotos_5215941-stock-photo-road-panorama.jpg"
          aria-hidden
          alt="image"
        />
      </div>
      <div className={style.description}>ava + description</div>
    </div>
  );
};

export default Description;
