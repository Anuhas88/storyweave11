const firebaseConfig = {
  apiKey: "AIzaSyCAv4R_cKWR-1pMkUsb0B37VgGJaLJe_fY",
  authDomain: "storyweave-1d10c.firebaseapp.com",
  databaseURL: "https://storyweave-1d10c-default-rtdb.firebaseio.com",
  projectId: "storyweave-1d10c",
  storageBucket: "storyweave-1d10c.firebasestorage.app",
  messagingSenderId: "479338218068",
  appId: "1:479338218068:web:0c457e2ede8c38a944a3c1",
  measurementId: "G-4CS8F2SNBT"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();