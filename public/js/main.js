'use strict';

//grab a form
const form = document.querySelector('.form-custom');

//grab an input
const inputEmail = form.querySelector('.form-input');


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

//push on form submit
    if (form) {
        form.addEventListener('submit', function (evt) {
            evt.preventDefault();
            firebasePush(inputEmail);

            //shows alert if everything went well.
            return alert('Data Successfully Sent to Realtime Database');
        })
    }
