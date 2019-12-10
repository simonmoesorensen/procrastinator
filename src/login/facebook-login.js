import React from 'react';
import FacebookLoginWithButton from 'react-facebook-login';

const responseFacebook = (response) => {
  console.log(response);
}

const componentClicked = () => {
  console.log( "Clicked!" )
}

export default function FacebookBtn() {
  return (
    <FacebookLoginWithButton
      appId="561894367969445"
      fields="name,email,picture"
      onClick={componentClicked}
      callback={responseFacebook}
      icon="fa-facebook"/>
    )
}
