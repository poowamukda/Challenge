import React from 'react'

import Contacts from './contacts'

interface Props {
    name: string;
    img: string;
    tel: string;
    email: string;
}

const Card = (props: Props) => {
    return (
        <React.Fragment>
            <div className='card'>

                <div className='top '>
                    <h2 className='name heading'>{props.name}</h2>
                    <img className='circle-img ' src={props.img} alt={props.name} />
                </div>
                <div className='bottom '>
                    <p className='info'>Tel: {props.tel}</p>
                    <p className='info'>Email: {props.email}</p>
                </div>

            </div>
        </React.Fragment>
    )
}

function Props() {
    return (
        <React.Fragment>
            <Card
                name="Beyonce"
                img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
                tel="+123 456 789"
                email="b@beyonce.com"
            />

            <Card
                name="Jack Bauer"
                img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
                tel="+987 654 321"
                email="jack@nowhere.com"
            />

            <Card
                name="Chuck Norris"
                img="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
                tel="+918 372 574"
                email="gmail@chucknorris.com"
            />
            <Card
                name={contacts[0].name}
                img={contacts[0].imgURL}
                tel={contacts[0].phone}
                email={contacts[0].email}
            />
        </React.Fragment>

    )
}

export default Props