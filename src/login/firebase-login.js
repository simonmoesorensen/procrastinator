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

                <Button variant = "primary" onClick={signInWithGoogle}>Sign in with Google</Button>

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

//Grab userID token
// var user = firebase.auth().currentUser;
// var name, email, photoUrl, uid, emailVerified;
//
// if (user != null) {
//   name = user.displayName;
//   email = user.email;
//   photoUrl = user.photoURL;
//   emailVerified = user.emailVerified;
//   uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
//                    // this value to authenticate with your backend server, if
//                    // you have one. Use User.getToken() instead.
// }


export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(FirebaseBtn);
