import React from "react";
interface Props {
  name: string;
  imgURL: string;
  phone?: string;
  email?: string;
  text?: string;
}

function Avatar(props: Props) {
  return (
    <React.Fragment>
      <img className="circle-img" src={props.imgURL} alt="avatar_img" />
    </React.Fragment>
  );
}

export default Avatar;
