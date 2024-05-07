import React from "react";
import { Contact , Avatar } from './interface';


  function card({ contacts, avatar }: { contacts: Contact; avatar: Avatar }) {
    return (
      <React.Fragment>         
      <div className="card">
        <div className="top">
          <h2 className="name">{contacts.name}</h2>
          <img className="circle-img" src={contacts.imgURL} alt="avatar_img" />
          <avatar
                name="Beyonce"
                imgURL="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
                phone="+123 456 789"
                email="b@beyonce.com"
                text="ใน TEXT"
            />
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