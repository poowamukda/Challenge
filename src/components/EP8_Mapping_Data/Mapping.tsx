import React from "react";
import Card from "./Card";
import Contacts from "./contacts";

interface Req_Contacts {
    id: number;
    name: string;
    imgURL: string;
    email: string;
    phone: string;
    text: string;
}

function createCard(contacts: Req_Contacts) {
    return (
        <Card
            key={contacts.id}  /* KEY ไม่แสดง*/
            id={contacts.id}
            name={contacts.name}
            imgURL={contacts.imgURL}
            phone={contacts.phone}
            email={contacts.email}
            text={contacts.text}
        />
    )
}

function Mapping() {
    return (
        <React.Fragment>
            {
                // อาเรย์จาก contacts from "./contacts"
                Contacts.map(createCard)
            }
        </React.Fragment>
    );
}

export default Mapping;
