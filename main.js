// Paste the code from Firebase 
var config = {
    apiKey: "AIzaSyAPgECfHHePp1JLPrvj7C7_E3WuLb1VsA8",
    authDomain: "dec042019.firebaseapp.com",
    databaseURL: "https://dec042019.firebaseio.com",
    projectId: "dec042019",
    storageBucket: "dec042019.appspot.com",
    messagingSenderId: "785269557551"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('contact77');

$('#contactForm2').submit(function (e) {
  e.preventDefault();

  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: $('.name').val(),
    sex: $('.sex99').val(),
    email: $('.email').val(),
    product1: $('.product1').val(),
    product2: $('.product2').val(),
    product3: $('.product3').val(),
    select: $('.select99').val(),
	comment: $('.com99').val(),

  });

  $('.success-message').show();

  $('#contactForm2')[0].reset();
});