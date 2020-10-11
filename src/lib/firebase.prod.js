import Firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyCs5pxpvs-spZqb2RDIu0sMaSVv__durBQ",
  authDomain: "netflix-react-d4a03.firebaseapp.com",
  databaseURL: "https://netflix-react-d4a03.firebaseio.com",
  projectId: "netflix-react-d4a03",
  storageBucket: "netflix-react-d4a03.appspot.com",
  messagingSenderId: "377386768002",
  appId: "1:377386768002:web:1d5f8ccb75bef1d027869b"
};

const firebase = Firebase.initializeApp(config);

export { firebase };

