import React from 'react'
// import '../../styles.css'
// ประกาศ interface ของ Props ของ Card
interface Props {
    name: string;
    img: string;
    tel: string;
    email: string;
}
function Card(props: Props) {
    return (
        <div >
            <img src={props.img} alt={props.name} />
            <h3>{props.name}</h3>
            <p>Tel: {props.tel}</p>
            <p>Email: {props.email}</p>

        </div>
    )
}




function PropMmodel() {
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

        </React.Fragment>
    )
}

export default PropMmodel