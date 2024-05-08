import React from "react";
import { Contact } from "./interface";
import Avatar from "./Avatar";
import Details from "./Details";

function card(contacts: Contact) {
  return (
    <React.Fragment>
      <div className="card">
        <div className="top">
          <h2 className="name">{contacts.name}</h2>
          {/* <img className="circle-img" src={contacts.imgURL} alt="avatar_img" /> */}

          <Avatar
            name="Beyonce"
            // imgURL="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
            imgURL={contacts.imgURL}
            phone="+123 456 789"
            email="b@beyonce.com"
            text="ใน TEXT"
          />
        </div>
        <div className="bottom">
          <Details detailInfo={contacts.phone} />
          <Details detailInfo={contacts.email} />
          <Details detailInfo={contacts.text} />
        </div>
      </div>
    </React.Fragment>
  );
}
export default card;

// name={Contacts[0].name}
