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
          <img src={props.profile.photos.large}/> <div>{props.profile.aboutMe}</div>
          <div>{props.profile.fullName}</div>
          <div>{props.profile.contactsS}</div>
          <div className="contacts">
            facebook: {props.profile.contacts.facebook}<br/>
            website: {props.profile.contacts.website}<br/>
            vk: {props.profile.contacts.vk}<br/>
            twitter: {props.profile.contacts.twitter}<br/>
            instagram: {props.profile.contacts.instagram}<br/>
            youtube: {props.profile.contacts.youtube}<br/>
            github: {props.profile.contacts.github}<br/>
            mainLink: {props.profile.contacts.mainLink}<br/>
          </div>
        </div>
      </div>
    );
  
};

export default Description;
