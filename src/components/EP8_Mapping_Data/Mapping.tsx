import React from "react";
import Card from "./Card";
import contacts from "./contacts";

interface Req_Contacts {
    name: string;
    imgURL: string;
    email: string;
    phone: string;
    text: string;
}

function createCard(contacts: Req_Contacts) {
    return (
        <Card
            name={contacts.name}
            imgURL={contacts.imgURL}
            phone={contacts.phone}
            email={contacts.phone}
            text={contacts.text}
        />
    )
}

function Mapping() {
    return (
        <React.Fragment>
            {
                // อาเรย์จาก contacts from "./contacts"
                contacts.map(createCard)
            }
        </React.Fragment>
    );
}

export default Mapping;
