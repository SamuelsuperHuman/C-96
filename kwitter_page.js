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
  
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });
    document.getElementById("msg").value="";
}

function log_out(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
}