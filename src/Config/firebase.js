import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "*****Your App Key******",
    authDomain: "*****your app domain******",
    projectId: "*****Your ID********",
    storageBucket: "*******project storage********",
    messagingSenderId: "************",
    appId: "***************************",
    measurementId: "*******"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig); 
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export{auth, provider};
