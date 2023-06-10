import React, { useEffect, useState } from 'react';
import RouteComponent from './Route';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// Configure Firebase.
// const config = {
//   apiKey: 'AIzaSyDKY-OaEUy-4MxT_XUhOXIUGxhWJYemOak',
//   authDomain: 'vieon-1806e.firebaseapp.com',
//   // ...
// };
// firebase.initializeApp(config);

function App() {
  return (
    <div className="App">
      <RouteComponent />
    </div>
  );
}

export default App;
