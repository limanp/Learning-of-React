import React from "react";
import preloader from "../../assets/images/Capsule-Loading.svg";
let Preloader = () => {
    return <div className={{backgroundColor: 'white'}}>
    <img src={preloader}/>
    </div>
}

export default Preloader;