  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyA4F18WX3glzTpgAgUAJExBTpUnMSqMX94",
    authDomain: "partials-c9291.firebaseapp.com",
    databaseURL: "https://partials-c9291.firebaseio.com",
    projectId: "partials-c9291",
    storageBucket: "partials-c9291.appspot.com",
    messagingSenderId: "805181933531",
    appId: "1:805181933531:web:101508c1edd5ce4c75c9fe",
    measurementId: "G-1NSS4R9GCG"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  console.log(firebase);

// Reference messages collection???
//var messagesRef = firebase.database().ref('messages');

var db = firebase.database();
var ref = db.ref('messages');

// Listen for form submit

document.getElementById('inventory-form').addEventListener('submit', submitForm);

function submitForm(e){

  e.preventDefault();

var data = {
  brand: getInputValue('brand'),
  color: getInputValue('color'),
  finish: getInputValue('finish'),
  thickness: getInputValue('thickness'),
  length: getInputValue('length'),
  width:  getInputValue('width'),
  location: getInputValue('location'),
  salesperson:  getInputValue('salesperson')

}

// Save data after Submit
ref.push(data);

// Alert Message
document.querySelector('.alert').style.display = 'block';

// Alert Message
setTimeout(function(){
  document.querySelector('.alert').style.display = 'none';
}, 2000)

// Reset form after submission
document.getElementById('inventory-form').reset();



}


// Function to get values from dropdown
function getInputValue(id){
  var x = document.getElementById(id);
  var input = x.options[x.selectedIndex].value;
  return input;
}


// Validate User Selected Values
//function validateValuesSelected(){
//  var x = document.getElementById('brand');
//  var selectedValue = x.options[e.selectedIndex].value;
  
//  if (selectedValue !=="") {
//    return true;
//  }
//  alert('Choose from the list');
// return false;
// }