import React from 'react';
import { hot } from 'react-hot-loader';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyB-IyC-7W_Gs_j0qYp2UwGDe0yeT9y0DIs',
  authDomain: 'intro-to-cloud-function.firebaseapp.com',
  databaseURL: 'https://intro-to-cloud-function.firebaseio.com',
  projectId: 'intro-to-cloud-function',
  storageBucket: 'intro-to-cloud-function.appspot.com',
  messagingSenderId: '297554731793',
  appId: '1:297554731793:web:972b4403f59d09b8',
};

firebase.initializeApp(firebaseConfig);

const App = () => {
  const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: '/signedIn',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
  };

  return (
    <div>
      <h1>My App</h1>
      <p>Please sign-in:</p>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
};

export default hot(module)(App);
