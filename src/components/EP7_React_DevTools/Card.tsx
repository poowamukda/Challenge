import React from "react";
import { Contact } from './interface';

  function Card(contacts:Contact) {
    return (
      <React.Fragment>         
      <div className="card">
        <div className="top">
          <h2 className="name">{contacts.name}</h2>

          <img className="circle-img" src={contacts.imgURL} alt="avatar_img" />
          
        </div>
        <div className="bottom">
          <p className="info">{contacts.phone}</p>
          <p className="info">{contacts.email}</p>
        </div>
      </div>
      </React.Fragment>
    );
  }
export  default Card

// name={Contacts[0].name}