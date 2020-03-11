import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBHcUKBZBxV1gIAaH38xLJxvG0mwHorLNk",
    authDomain: "sendhi.firebaseapp.com",
    databaseURL: "https://sendhi.firebaseio.com",
    projectId: "sendhi",
    storageBucket: "sendhi.appspot.com",
    messagingSenderId: "1073584628697",
    appId: "1:1073584628697:web:2bb4b226f85b55cb476fc8",
    measurementId: "G-8BZ60J0EGV"
}

firebase.initializeApp(firebaseConfig)
firebase.firestore()
 
export default firebase