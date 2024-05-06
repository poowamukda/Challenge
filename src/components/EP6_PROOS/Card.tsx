import { editableInputTypes } from '@testing-library/user-event/dist/utils';
import React from 'react';
interface Props {
    name: string;
    img: string;
    tel: string;
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
export default Card

