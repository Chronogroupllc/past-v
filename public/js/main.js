// 'use strict';
var databaseRef = firebase.database().ref('users/');
//grab a form
const form = document.querySelector('.form-custom');

//grab an input
const inputEmail = "Yas@g"
// form.querySelector('.form-input');


//config your firebase push
const config = {
    apiKey: "AIzaSyCGZBjtbQ05SrT0wpBton2TKh29Q6Gr9Lc",
   authDomain: "chrono-main.firebaseapp.com",
   databaseURL: "https://chrono-main.firebaseio.com",
   projectId: "chrono-main",
   storageBucket: "chrono-main.appspot.com",
   messagingSenderId: "63898698136",
   appId: "1:63898698136:web:4389232ac8fbacf4d9ebed",
   measurementId: "G-FXHLEQL5YR"
};



//create a functions to push
    function firebasePush(input) {


        //prevents from braking
        if (!firebase.apps.length) {
            firebase.initializeApp(config);
            firebase.analytics();
        }

        //push itself
        var mailsRef = firebase.database().ref('emails').push().set(
            {
                mail: input.value
            }
        );


    }

function save_user(){
     var user_name = "document.getElementById('user_name').value;"

     var uid = firebase.database().ref().child('users').push().key;

     var data = {
      user_id: uid,
      user_name: user_name
     }

     var updates = {};
     updates['/users/' + uid] = data;
     firebase.database().ref().update(updates);

     alert('The user is created successfully!');
     reload_page();
    }


//push on form submit
    if (form) {
        form.addEventListener('submit', function (evt) {
          alert("Hello! I am an alert box!!" + inputEmail);
            evt.preventDefault();
            firebasePush(inputName);


            //shows alert if everything went well.
            return alert('Data Successfully Sent to Realtime Database');
        })
    }
