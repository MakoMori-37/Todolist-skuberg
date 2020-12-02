import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
 
        apiKey: "AIzaSyClNyRGjPvVYCUDCH1H_Pu7Ii25b2uAbEY",
        authDomain: "todolist-skuberg.firebaseapp.com",
        databaseURL: "https://todolist-skuberg.firebaseio.com",
        projectId: "todolist-skuberg",
        storageBucket: "todolist-skuberg.appspot.com",
        messagingSenderId: "454032481367",
        appId: "1:454032481367:web:f708b1d1db78889ea65712",
        measurementId: "G-2EBMXLGKYL"
 
});

const db = firebaseApp.firestore();

export default db;