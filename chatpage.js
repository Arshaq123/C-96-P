  // Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD2Qc8NEu_MfEH6xt7wva5oYiZDwRvsUFo",
    authDomain: "project-94-d5d31.firebaseapp.com",
    databaseURL: "https://project-94-d5d31-default-rtdb.firebaseio.com",
    projectId: "project-94-d5d31",
    storageBucket: "project-94-d5d31.appspot.com",
    messagingSenderId: "609587560033",
    appId: "1:609587560033:web:fdf1e3a2dab6fa84307420"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

function send(){
msg = document.getElementById("msg").value;
firebase.database().ref(room_name)push({
    name:user_name,
    message:msg,
    like:0
});
document.getElementById("msg").value = "";
}


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();