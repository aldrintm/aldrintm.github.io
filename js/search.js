var searchbox = document.querySelector("#search_input");

searchbox.addEventListener("keyup", function(e){
	var search_item = e.target.value.toLowerCase();
	var span_items = document.querySelectorAll(".table_body .name span")
	


  span_items.forEach(function(item){
  	if(item.textContent.toLowerCase().indexOf(search_item) != -1 ){
  		item.closest("li").style.display = "block";
  		console.log(item);
  	}
  	else{
  		item.closest("li").style.display = "none";
  	}
  })
 });