import React from "react";
import Card from "./Card";
import Contacts from "./contacts";
import Avatar from "./Avatar";

function Props() {
  return (
    <React.Fragment>
      {/* <Avatar
        name="Beyonce"
        imgURL="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
        phone="+123 456 789"
        email="b@beyonce.com"
        text="ใน TEXT"
      /> */}

      {/* แบบที่ 1 */}
      {/* <Card
        name="Beyonce"
        imgURL="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
        phone="+123 456 789"
        email="b@beyonce.com"
        text="ใน TEXT"
      />

      <Card
        name="Jack Bauer"
        imgURL="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
        phone="+987 654 321"
        email="jack@nowhere.com"
        text="ใน TEXT"
      />

      <Card
        name="Chuck Norris"
        imgURL="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
        phone="+918 372 574"
        email="gmail@chucknorris.com"
        text="ใน TEXT"
      /> */}

      {/* แบบที่ 2 จาก contacts*/}
      {/* <Card
        name={Contacts[0].name}
        imgURL={Contacts[0].imgURL}
        phone={Contacts[0].phone}
        email={Contacts[0].email}
        text={Contacts[0].text}
      />
      <Card
        name={Contacts[1].name}
        imgURL={Contacts[1].imgURL}
        phone={Contacts[1].phone}
        email={Contacts[1].email}
        text={Contacts[1].text}
      />
      <Card
        name={Contacts[2].name}
        imgURL={Contacts[2].imgURL}
        phone={Contacts[2].phone}
        email={Contacts[2].email}
        text={Contacts[2].text}
      /> */}
    </React.Fragment>
  );
}

export default Props;
