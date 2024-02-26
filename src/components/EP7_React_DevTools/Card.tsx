import React from 'react';
import Avatar from './Avatar';
interface Props {
    name: string;
    img: string;
    tel: string;
    email: string;
    text: string;
}
interface Contact {
    name: string;
    imgURL: string;
    phone: string;
    email: string;
    text: string;
}
const Card = (props: Props) => {
    return (
        <React.Fragment>
            <div className='card'>
                <div className='top '>
                    <h2 className='name heading'>{props.name}</h2>
                    <img className='circle-img ' src={props.img} alt={props.name} />
                    {/* //////////////                  */}
                    <Avatar />
                    {/* /////////////                   */}
                </div>
                <div className='bottom '>
                    <p className='info'>Tel: {props.tel}</p>
                    <p className='info'>Email: {props.email}</p>
                    <p className='info'>รูปแบบ: {props.text} </p>
                </div>

            </div>
        </React.Fragment>
    )
}


const contacts: Contact[] = [
    {
        name: "Beyonce ",
        imgURL:
            "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg",
        phone: "+123 456 789",
        email: "b@beyonce.com",
        text: "เรียกจากอ็อปเจ็ค"
    },
    {
        name: "Jack Bauer ",
        imgURL:
            "https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg",
        phone: "+987 654 321",
        email: "jack@nowhere.com",
        text: "เรียกจากอ็อปเจ็ค"
    },
    {
        name: "Chuck Norris ",
        imgURL:
            "https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png",
        phone: "+918 372 574",
        email: "gmail@chucknorris.com",
        text: "เรียกจากอ็อปเจ็ค"
    }
];

function Props() {
    return (
        <React.Fragment>
            <Card
                name="Beyonce"
                img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
                tel="+123 456 789"
                email="b@beyonce.com"
                text="ใน TEXT"
            />

            <Card
                name="Jack Bauer"
                img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
                tel="+987 654 321"
                email="jack@nowhere.com"
                text="ใน TEXT"
            />

            <Card
                name="Chuck Norris"
                img="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
                tel="+918 372 574"
                email="gmail@chucknorris.com"
                text="ใน TEXT"
            />



            <Card
                name={contacts[0].name}
                img={contacts[0].imgURL}
                tel={contacts[0].phone}
                email={contacts[0].email}
                text={contacts[0].text}
            />
            <Card
                name={contacts[1].name}
                img={contacts[1].imgURL}
                tel={contacts[1].phone}
                email={contacts[1].email}
                text={contacts[1].text}
            />
            <Card
                name={contacts[2].name}
                img={contacts[2].imgURL}
                tel={contacts[2].phone}
                email={contacts[2].email}
                text={contacts[2].text}
            />

        </React.Fragment>

    )
}



export default contacts
export { Props};