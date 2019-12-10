import React, { Component } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';
import Button from 'react-bootstrap/Button';

const firebaseApp = firebase.initializeApp(firebaseConfig);

class FirebaseBtn extends Component {
  render() {
    const {
      user,
      signOut,
      signInWithGoogle,
    } = this.props;

    return (
      <div>
          {
            user
              ? <Button variant="primary" onClick={signOut}>Sign out with Google</Button>
              : (
                <div className="d-flex flex-column">
                <Button variant = "primary" onClick={signInWithGoogle}>Sign in with Google</Button>
                </div>
              )

          }

        </div>
    );
  }
}

const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};



export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(FirebaseBtn);
