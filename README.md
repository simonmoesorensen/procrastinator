**CPSC 349 Front end web dev - Final Project**
**Group: Wallstreet**

## User

![Initial Start](https://github.com/simonmoesorensen/procrastinator/blob/master/Images/Start.JPG)

User can add more "cards" to the display.

![Adding](https://github.com/simonmoesorensen/procrastinator/blob/master/Images/Adding.JPG)

Example display of multiple added "cards."

![Display](https://github.com/simonmoesorensen/procrastinator/blob/master/Images/Display1.JPG)

User can manipulate "cards." User can drag the box around with arrows in top right of card, resize via manipulator bottom right, or remove the card via trashcan on the bottom left.

![Edit](https://github.com/simonmoesorensen/procrastinator/blob/master/Images/Editsize.JPG)
The user can search within the cards.*



Login via login button top right. Modal looks might have changed, but functionality still similar.
User can login via email login or google or facebook currently.

![Login](https://github.com/simonmoesorensen/procrastinator/blob/master/Images/Login.JPG)









This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

### Firebase API

 npm install firebase

Install firebase libraries and higher components

 npm install --save firebase react-with-firebase-auth

https://firebase.google.com/docs/auth/web/manage-users
Get a user's profile
To get a user's profile information, use the properties of an instance of User. For example:

```
var user = firebase.auth().currentUser;
var name, email, photoUrl, uid, emailVerified;

if (user != null) {
  name = user.displayName;
  email = user.email;
  photoUrl = user.photoURL;
  emailVerified = user.emailVerified;
  uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
                   // this value to authenticate with your backend server, if
                   // you have one. Use User.getToken() instead.
}
```
 npm install firebaseui

### Facebook API

 npm install react-facebook-login

https://www.npmjs.com/package/react-facebook-login

https://developers.facebook.com/docs/reference/javascript/FB.getLoginStatus/
