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
//console.log(firebase);

// Reference messages collection???
//var messagesRef = firebase.database().ref('messages');

var db = firebase.database();
var ref = db.ref('messages');

ref.on("value", function(snapshot){
  //console.log(snapshot.val());
  if(snapshot.exists()){
    var content = '';
    snapshot.forEach(function(data){
        var val = data.val();
        //console.log(val);
        content +='<tr>';
        content += '<td>' + val.brand + '</td>';
        content += '<td>' + val.color + '</td>';
        content += '<td>' + val.finish + '</td>';
        content += '<td>' + val.thickness + '</td>';
        content += '<td>' + val.length + '</td>';
        content += '<td>' + val.width + '</td>';
        content += '<td>' + val.location + '</td>';
        content += '<td>' + val.salesperson + '</td>';
        content += '<td> <img src=" ' + val.image + ' "/></td>';
        content += '</tr>';
    });
    document.getElementById('table').innerHTML = content;
}

}, function (error) {
  console.log("Error: " + error.code);
});

var table = document.getElementsById('egghead')[0];
ref.on("child_added", function(child) {
  console.log(child.key+': '+child.val());
  var tr = document.createElement('tr');
  var td = document.createElement('td');
  var sp = "  :  ";
  td.innerText = child.val().brand+sp+child.val().color+sp+child.val().finish+sp+child.val().thickness+sp+child.val().length+"  x  "+child.val().width+sp+child.val().location+sp+child.val().salesperson;
  tr.appendChild(td);
  table.appendChild(tr);
});

ref.on("child_added", function(data){
  var content = data.val();
  document.getElementById('brand').innerHTML = ("Brand: " + content.brand);
  document.getElementById('color').innerHTML = ("Color: " + content.color);
  document.getElementById('finish').innerHTML = ("Finish: " + content.finish);
  document.getElementById('thickness').innerHTML = ("Thickness: " + content.thickness);
  document.getElementById('length').innerHTML = ("Length: " + content.length);
  document.getElementById('width').innerHTML = ("Width: " + content.width);
  document.getElementById('location').innerHTML = ("Location: " + content.location);
  document.getElementById('staff').innerHTML = ("Staff: " + content.salesperson);
});

function getColor() {
  var inputColor = document.getElementById("stone").value;
  console.log(inputColor);

  // Reset Input Text Box
  document.getElementById('stone').value = ''
}

function findPartial() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("table");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}



//ref.on('value', function(snapshot) {
  //if(snapshot.exists()){
    //var content = '';
    //snapshot.forEach(function(data){
      //var val = data.val();
      //content += '<tr>';
      //content += '<td>' + val.brand + '<td>';
      //content += '<td>' + val.color + '<td>';
      //content += '<td>' + val.finish + '<td>';
      //content += '<td>' + val.thickness + '<td>';
      //content += '<td>' + val.length + '<td>';
      //content += '<td>' + val.width + '<td>';
      //content += '<td>' + val.location + '<td>';
      //content += '<td>' + val.salesperson + '<td>';
      //content += '/tr>';
    //});
    //document.getElementById('ex-table').append(content);
  //}
//});






//addEventListener('submit', myFunctionAddList);

//function myFunctionAddList(){
//  var x = document.createElement("LI");
//  var t = document.createTextNode("Color " + "Brand" + brand);
//  x.appendChild(t);
//  document.getElementById("messages").appendChild(x);
//}


function gotData(data){
    //console.log(data.val());
    var messages = data.val();
    var keys = Object.keys(messages);
    //console.log(keys.length);
    for (var i = 0; i < keys.length; i++) {
        var k = keys[i];
        var brand = messages[k].brand;
        var color = messages[k].color;
        //console.log(brand,color);
        var li = document.createElement("LI");
        var content = document.createTextNode(brand);
        li.appendChild(content);
        document.getElementById("messages").appendChild(li);
    }
    
        //var li = document.createElement('li',brand + ': ' + li.parent('messages'));
    
        //var list = document.createElement('ul');
        //var item = document.createElement('li');
        //item.appendChild(document.createTextNode(brand[i]));
        //list.appendChild(item);

        //document.getElementById('messages').innerHTML = brand + color;

        //document.getElementById('messages').appendChild(list);
    }


function errData(err){
    console.log('Error!');
    console.log(err);
  }