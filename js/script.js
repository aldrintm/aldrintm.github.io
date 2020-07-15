// Sheetrock.js 1.0 Example 1
// https://chriszarate.github.io/sheetrock/

// The most basic use case of Sheetrock simply fetches the an 
// entire worksheet and loads it into a <table>.

// Define spreadsheet URL.


var mySpreadsheet = 'https://docs.google.com/spreadsheets/d/1p5MR2t2dbBeUb2Kvpx98ncKCIHfkb5Y57nF2oYlvRCg/edit#gid=0';

	//Load an entire worksheet.
	$(document).ready(function(){
		$('#remnants').sheetrock({
		url: mySpreadsheet,
        query: "select C,D,E,F,G,H,L,M",
	});
	});


	
	//alert("Partial Slab Master List - Aldrin");


    //$(document).ready(function(){
	//	$('#search').sheetrock({
  	//	url: mySpreadsheet,
  	//	query: "where B contains 'Calacatta'"
	//});

	//alert("Partial Slab Master List - Aldrin");
	//});
/*
    function showUserForm(){
    	HtmlService.createTemplateFromFile
    }


    var colorBox = document.getElementById("colorinput")-- this is the class of the input search box input
    var customerBox = document.getElementById("customerinput")-- this is the class of the input search box input
    var lengthBox = document.getElementById("lengthinput")-- this is the class of the input search box input

    document.getElementById("btn").addEvenListener("click",addRecord); // add a record when someone clicks on a button
    function addRecord(){
    	var data = {
    		name: colorBox.value,
    		phone: customerBox.value,
    		length: lengthBox.value
    	};
    }*/

