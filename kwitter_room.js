
//ADD YOU FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyA5vQHY7CRHEVIhO-QgigIu5DtXTu7bm48",
      authDomain: "kwitter-ae345.firebaseapp.com",
      databaseURL: "https://kwitter-ae345-default-rtdb.firebaseio.com",
      projectId: "kwitter-ae345",
      storageBucket: "kwitter-ae345.appspot.com",
      messagingSenderId: "431863883847",
      appId: "1:431863883847:web:dc878e8b8ad1c0d6332962"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    

function addRoom()
{
      Room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(Room_name).update({
            purpose : "adding room name"
      })

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+" </div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
         window.location = "index.html";
}