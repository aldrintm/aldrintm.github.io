/*get uid*/
firebase.auth().onAuthStateChanged(function (user) {
        uid=user.uid;
});


/*send data to database*/
class task {
    constructor(ListElement) {
        this.ListElement = ListElement;
    }
}
submit.addEventListener('click', () => {
    var data = new task;
    data.ListElement = input.value;
    database.ref(uid).push(data);
});
/*send data to database*/

each user a separate list. uid as an identifier. 
/*fetch data from database */
var ref = firebase.database().ref(uid);
/*
ref.once('value').then(function (snap) {
    dataValues = snap.val();
    keys = Object.keys(uid);
    console.log(dataValues[0].ListElement);
});
*/

ref.on('value',function (snap) {
    dataValues = snap.val();
    keys = Object.keys(uid);
    console.log(dataValues[0].ListElement);
});