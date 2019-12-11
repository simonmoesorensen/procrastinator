var firebase = require('firebase/app');
var firebaseui = require('firebaseui');

const config = {
    apiKey: "AIzaSyCLT58pVxlX3GqyeoOMzR-8RtNV4fP0nzI",
    authDomain: "react-firebase-authentic-d432b.firebaseapp.com",
    databaseURL: "https://react-firebase-authentic-d432b.firebaseio.com",
    projectId: "react-firebase-authentic-d432b",
    storageBucket: "react-firebase-authentic-d432b.appspot.com",
    messagingSenderId: "826903534420",
    appId: "1:826903534420:web:87683815fa84251f0586c1",
    measurementId: "G-PGHR3F51Z0"
};

firebase.initializeApp(config);

var ui = new firebaseui.auth.AuthUI(firebase.auth());
var uiConfig = function (signInSuccess) {
    return {
        signInOptions: [
            {
                // EMAIL LINK
                provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
                signInMethod: firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD,
            },
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        ],
        callbacks: {
            signInSuccessWithAuthResult: signInSuccess
        },
        credentialHelper: firebaseui.auth.CredentialHelper.GOOGLE_YOLO,
        signInFlow: 'popup'
    }
};



function startUi(selector, config) {
    if (ui.isPendingRedirect()) {
        ui.start('#firebaseui-auth-container', config);
    } else {
        ui.start(selector, config)
    }
}

export {startUi, uiConfig, firebase};
