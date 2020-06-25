const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

function init() {
Tabletop.init( { key: ‘https://docs.google.com/spreadsheets/d/1p5MR2t2dbBeUb2Kvpx98ncKCIHfkb5Y57nF2oYlvRCg/pubhtml',
callback: function(data, tabletop) {
console.log(data)
},
simpleSheet: true } )
}
window.addEventListener(‘DOMContentLoaded’, init)
