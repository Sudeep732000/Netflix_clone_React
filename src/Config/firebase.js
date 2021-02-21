import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDijrZ5dWebjoLHjN0y2-NuYgXQg-Y2Gmg",
    authDomain: "clone-netflix-30552.firebaseapp.com",
    projectId: "clone-netflix-30552",
    storageBucket: "clone-netflix-30552.appspot.com",
    messagingSenderId: "243950030394",
    appId: "1:243950030394:web:58c7888f999ee4383eaf03",
    measurementId: "G-T4JDRKB0NN"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig); 
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export{auth, provider};
