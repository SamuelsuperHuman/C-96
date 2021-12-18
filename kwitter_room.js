//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCguAt7PAAMIztYdN4rdI7tYY0X-tHykMs",
      authDomain: "let-s-chat-74b4a.firebaseapp.com",
      databaseURL: "https://let-s-chat-74b4a-default-rtdb.firebaseio.com",
      projectId: "let-s-chat-74b4a",
      storageBucket: "let-s-chat-74b4a.appspot.com",
      messagingSenderId: "626088132020",
      appId: "1:626088132020:web:47a1fa1ba34548881dc6e1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("room_name" + Room_names);
                  row = "<div class='room_name' id=" + Room_names + "onclick='redirect_to_room_name(this.id)'>#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();

function add_room() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function redirect_to_room_name(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function log_out() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}