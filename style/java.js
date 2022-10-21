window.addEventListener('scroll' , function(){
    const header = this.document.querySelector('header');
    header.classList.toggle("sticky" , window.scrollY > 0);
});

function toggleMenu(){
    const menuToggle = document.querySelector('.menuToggle');
    const navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');

}


const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});


window.onscroll = function(){
    scrollFunction();
 };

 function scrollFunction(){
    
   if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
     document.getElementById("btnScroll").style.display = "block";
   }else{
     document.getElementById("btnScroll").style.display = "none";

   }
 }

 function toUp(){
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
 }
