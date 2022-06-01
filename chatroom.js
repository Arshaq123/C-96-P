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
      document.getElementById("UserName").innerHTML="Welcome "+ user_name +" !";
      function addRoom(){
            room_name = document.getElementById("room_name").value;
            firebase.database().ref("/").child(room_name).update({
                  Key:"room"
            });
            localStorage.setItem("Room_Name",room_name);
            window.location="chatpage.html";
      }
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("room_name-"+Room_names);
        //Start code
        row = "<div class='anyclass' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
        document.getElementById("output").innerHTML+=row;
        //End code
        });});}
  getData();
  
  
  function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("Room_Name",name);
  window.location="chatpage.html";
  }
  function logout() {
      localStorage.removeItem("Username");
      localStorage.removeItem("Room_Name");
      window.location = "index.html";
}