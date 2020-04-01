function navbarscroll(){
	window.addEventListener("scroll", function(){
	let navArea = document.getElementById('nav-area');

		if(window.pageYOffset>0){
			navArea.classList.add('cus-nav');
		}else{
			navArea.classList.remove('cus-nav')
		}
	});
}

export default navbarscroll;



