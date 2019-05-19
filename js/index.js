//=========LIMIT THE TEXT===========
document.addEventListener('DOMContentLoaded', function() {
	let textNodeList = document.getElementsByClassName("limit-txt");
	let x = textNodeList.length;
	let i;
	for (i = 0; i < x; i++) {
	    let wholeString = textNodeList[i].innerHTML;
	    let charNumber = wholeString.length;

  		if (charNumber <= 150) {
    		continue;
  		} else {
  			let a = wholeString.slice(0, 150);
  			let b = a + "..."
  			document.getElementsByClassName("limit-txt")[i].innerHTML = b;
  		};
	};
}, false);

//=========SLIDE TIMER===========
document.addEventListener('DOMContentLoaded', function() {
let myIndex = 0;
carousel();

function carousel() {
    let i;
    let x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 5000); // Change image every 2 seconds
}




}, false);



// $(document).ready(function(){
// 	$('#newsButton').click(function() {
//     	window.location.replace('News.html');
//    	});
// });
      