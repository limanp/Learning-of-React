import React from "react";
import Preloader from "../../../common/Preloader/Preloader";
import style from "./Profile_Info.module.css";

const Description = (props) => {

  if(!props.profile) {
    return <Preloader/>
  }
 
    return (
      <div>
        <div>
          <img
            src="https://static5.depositphotos.com/1037262/521/i/450/depositphotos_5215941-stock-photo-road-panorama.jpg"
            aria-hidden
            alt="image"
          />
        </div>
        <div className={style.description}>
          <img src={props.profile.photos.large}/> + description</div>
      </div>
    );
  
};

export default Description;
