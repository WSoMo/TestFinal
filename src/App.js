import React, { useEffect, useState } from 'react';
import RouteComponent from './Route';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getApp, getApps, initializeApp } from 'firebase/app';



function App() {
  return (
    <div className="App">
      <RouteComponent />
    </div>
  );
}

export default App;
