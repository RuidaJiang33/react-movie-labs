import React from 'react';
import { initializeApp } from 'firebase/app';
import { getFireStore,  } from 'firebase/firestore'
import { getAuth, signInWithRedirect, GoogleAuthProvider } from 'firebase/auth';
import Button from '@mui/material/Button';

const firebaseConfig = {
  apiKey: "AIzaSyCMDEyvldOblWMdEk-T60W3PR-5SJ3xpLw",
  authDomain: "movies-lab-857db.firebaseapp.com",
  projectId: "movies-lab-857db",
  storageBucket: "movies-lab-857db.appspot.com",
  messagingSenderId: "798437313882",
  appId: "1:798437313882:web:d31082f769e5ad1025f763",
  measurementId: "G-YEZERHDLZ7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFireStore();



const FirebaseService = () => {

  const handleButtonClick = () => {
    signInWithRedirect(auth, new GoogleAuthProvider());
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleButtonClick}>
        Click Me
      </Button>
    </>
  );
}

export default FirebaseService;
