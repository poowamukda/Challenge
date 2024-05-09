import React from "react";
import { Contact } from "./interface";
import Avatar from "./Avatar";
import Details from "./Details";

function card(contacts: Contact) {
  return (
    <React.Fragment>
      <div className="card">
        <div className="top">
          <h3>
            {contacts.id}
          </h3>
          <h2 className="name">{contacts.name}</h2>
          {/* <img className="circle-img" src={contacts.imgURL} alt="avatar_img" /> */}

          <Avatar
            name="Beyonce"
            // imgURL="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
            imgURL={contacts.imgURL}
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


