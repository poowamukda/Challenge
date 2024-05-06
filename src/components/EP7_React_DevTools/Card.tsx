import React from "react";
import { Contact } from './interface';
import Avatar from "./Avatar";

  function card(contacts:Contact) {
    return (
      <React.Fragment>         
      <div className="card">
        <div className="top">
          <h2 className="name">{contacts.name}</h2>

          {/* <img className="circle-img" src={contacts.imgURL} alt="avatar_img" /> */}
          <Avatar imgURL={contacts.imgURL}/>
        </div>
        <div className="bottom">
          <p className="info">{contacts.phone}</p>
          <p className="info">{contacts.email}</p>
          <p className="info">{contacts.text}</p>
        </div>
      </div>
      </React.Fragment>
    );
  }
export  default card

// name={Contacts[0].name}