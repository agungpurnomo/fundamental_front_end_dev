function main(){
	window.addEventListener("scroll", function(){
	let navArea = document.getElementById('nav-area');

		if(window.pageYOffset>0){
			navArea.classList.add('cus-nav');
		}else{
			navArea.classList.remove('cus-nav')
		}
	});


	// $( document ).ready(function() {
 //    const listMovieElement=document.querySelector("#listMovie");
 //    listMovieElement.innerHTML +=`
 //    			<div class="md-col-4" style="padding-right: 10px;">
	// 			<div class="card" style="width: 18rem;">
	// 		  		<img src="img/1.jpg" class="card-img-top" alt="...">
	// 			  	<div class="card-body">
	// 				    <h5 class="card-title">Card title</h5>
	// 				    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
	// 				    <a href="#" class="btn btn-primary">Go somewhere</a>
	// 		  		</div>
	// 			</div>	
	// 			</div>
 //    			<div class="md-col-4" style="padding-right: 10px;">
	// 			<div class="card" style="width: 18rem;">
	// 		  		<img src="img/3.jpg" class="card-img-top" alt="...">
	// 			  	<div class="card-body">
	// 				    <h5 class="card-title">Card title</h5>
	// 				    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
	// 				    <a href="#" class="btn btn-primary">Go somewhere</a>
	// 		  		</div>
	// 			</div>	
	// 			</div>
	// 			<div class="md-col-4" style="padding-right: 10px;">
	// 			<div class="card" style="width: 18rem;">
	// 		  		<img src="img/2.jpg" class="card-img-top" alt="...">
	// 			  	<div class="card-body">
	// 				    <h5 class="card-title">Card title</h5>
	// 				    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
	// 				    <a href="#" class="btn btn-primary">Go somewhere</a>
	// 		  		</div>
	// 			</div>	
	// 			</div>`
	// });
	$(document).ready(function(){
		$("button").click(function(){
		$.ajax({
			url :'http://www.omdbapi.com',
			type : 'get',
			dataType: 'json',
			data: {
				'apikey': 'f9b91bfc',
				's': 'harry'
			},
			success: function(list) {
				if (list.Response == "True") {
					let movies=list.Search;
					$.each(movies, function(i, data){
						$('listMovie').append(`
							<div class="md-col-4" style="padding-right: 10px;">
							<div class="card" style="width: 18rem;">
						  		<img src="`+ data.Poster +`" class="card-img-top" alt="...">
							  	<div class="card-body">
								    <h5 class="card-title">Card title</h5>
								    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
								    <a href="#" class="btn btn-primary">Go somewhere</a>
						  		</div>
							</div>	
							</div>`);
					})
				}else{
					$('listMovie').html('<h1 class="text-center">'+ list.Error +'</h1>')
				}
			}
		});
	});
	});

}

export default main;



