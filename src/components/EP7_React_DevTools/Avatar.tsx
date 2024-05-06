import React from 'react'
function Avatar(props) {
  return (

    <React.Fragment>
      <img className="circle-img" src={props.imgURL} alt="avatar_img" />
    </React.Fragment>


  )
}
export default Avatar
