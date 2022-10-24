import React from "react";
import Preloader from "../../../common/Preloader/Preloader";
import style from "./Profile_Info.module.css";

const Description = (props) => {
  if (!props.profile) {
    return <Preloader />;
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
        <img src={props.profile.photos.large} />{" "}
        <div>{props.profile.aboutMe}</div>
        <div>{props.profile.fullName}</div>
      </div>
      <div className={style.contacts}>
        <span>Facebook:</span> {props.profile.contacts.facebook}
        <br />
        <span>Website:</span> {props.profile.contacts.website}
        <br />
        <span>Vk:</span> {props.profile.contacts.vk}
        <br />
        <span>Twitter:</span> {props.profile.contacts.twitter}
        <br />
        <span>Instagram:</span> {props.profile.contacts.instagram}
        <br />
        <span>Youtube:</span> {props.profile.contacts.youtube}
        <br />
        <span>Github:</span> {props.profile.contacts.github}
        <br />
        <span>Main Link:</span> {props.profile.contacts.mainLink}
        <br />
      </div>
      <div className="aboutWork">
        <span>Статус поиска работы:</span>
        {props.profile.lookingForAJob === true
          ? "сейчас ищу работу!"
          : "Нет, работу я не ищу"}
        <br />
        <span>Описание поиска работы:</span>
        {props.profile.lookingForAJobDescription}
      </div>
    </div>
  );
};

export default Description;
