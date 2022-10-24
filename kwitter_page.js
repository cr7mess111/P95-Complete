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
  firebase.initializeApp(firebaseConfig)



function send()
{
       msg = document.getElementById("msg").value;
      
       firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value ="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();