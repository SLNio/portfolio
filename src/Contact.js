import React from "react";
import profilePicture from "./profile_pic2.jpg";
import contactPicture from "./photography.jpg";

// Shows about info and pictures of photographer
class Contact extends React.PureComponent {
  render() {
    console.log(this.props);
    return (
      <div className="page" id="contact">
        <div id="contactPictureContainer">
          <img
            src={contactPicture}
            id="contactPicture"
            alt="Photographing bumble bees in Croatia"
          />
          <div></div>
        </div>
        <div className="bio">
          <img src={profilePicture} id="bioPicture" alt="profile" />
          <p className="bioText">
            I am a Photographer based in Amsterdam, with a focus on Nature and
            Travel Photography.
            <br></br>
            <br></br>
            One of my favourite photography techniques is Macro Photography,
            since it enables you to enlarge very small details. Nowadays, I am
            always trying to look for these small details, during my hikes and
            travels. My fellow travellers are therefore less happy with me
            sometimes, since a hike can now last twice as long.
            <br></br>
            <br></br>
            Although there are a lot of cool things to photograph on the main
            land, the ocean has really won my heart the last couple of years. It
            takes some skills to keep floating on the same level, while not
            hitting anything with your fins and trying to make that perfect
            photo, but it is also a lot of fun. There are so many weird
            creatures that you can approach really closely.
            <br></br>
            <br></br>
            With my galleries I’d like to share some of the details and marine
            life I’ve encountered.
            <br></br>
            <br></br>
            <b>Contact: https://github.com/SLNio</b>
          </p>
        </div>
      </div>
    );
  }
}
export default Contact;
