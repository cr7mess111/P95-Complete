 var firebaseConfig = {
  apiKey: "AIzaSyAhFFwhJSg5jinjDase7OK2sPIzKoIguRQ",
  authDomain: "project93-e1ae6.firebaseapp.com",
  databaseURL: "https://project93-e1ae6-default-rtdb.firebaseio.com",
  projectId: "project93-e1ae6",
  storageBucket: "project93-e1ae6.appspot.com",
  messagingSenderId: "880952465327",
  appId: "1:880952465327:web:1d5bbc248ad368f3ea415a"
};

// Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name") 
  document.getElementById("user_name").innerHTML = "Hello " + user_name + "!";

  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
    
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";

  }

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log("Room Nqame - " + Room_name);
   row = "<div class = 'room name' id="+Room_names+" onclick = 'redirectToRoomName(this.id)'>#"+Room_names +"</div><hr>";
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

function logout()
{
  localStorage.removeItem("user_name")
  localStorage.removeItem("room_name")
  window.location = "kwitter.html"
}