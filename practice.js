
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyDnFOyMjD8-Npkzz9vyvmnALCPaoMBRXQk",
    authDomain: "kwitter-d9b9c.firebaseapp.com",
    databaseURL: "https://kwitter-d9b9c-default-rtdb.firebaseio.com",
    projectId: "kwitter-d9b9c",
    storageBucket: "kwitter-d9b9c.appspot.com",
    messagingSenderId: "742854123607",
    appId: "1:742854123607:web:d911d0782c6ca56a444312"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"

    });
}



