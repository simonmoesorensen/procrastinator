import React from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import Button from 'react-bootstrap/Button';

const responseFacebook = (response) => {
  console.log(response);
}

const componentClicked = () => {
  console.log( "Clicked!" )
}

export default function FacebookBtn() {
  return (
<div>
    <FacebookLogin
      appId="561894367969445"
      //fields="name,email,picture"
      //onClick={componentClicked}
      //callback={responseFacebook}
      //icon="fa-facebook"/>
      callback={responseFacebook}
      render={renderProps => (
        <Button variant = "primary" onClick={renderProps.onClick}>Sign in with Facebook</Button>
      )}
      />
      </div>
    )
}
