
 // Your web app's Firebase configuration
 var firebaseConfig = {
      apiKey: "AIzaSyAoEHS4gEl50ph5Ufmv6aHMOtW3J09j7Zs",
      authDomain: "classtest-66c9f.firebaseapp.com",
      projectId: "classtest-66c9f",
      storageBucket: "classtest-66c9f.appspot.com",
      messagingSenderId: "172173432530",
      appId: "1:172173432530:web:2c4f14819b1c8fe512bf0b"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
