function main(){
	window.addEventListener("scroll", function(){
	let navArea = document.getElementById('nav-area');

		if(window.pageYOffset>0){
			navArea.classList.add('cus-nav');
		}else{
			navArea.classList.remove('cus-nav')
		}
	});



	// $(document).ready(function(){
	// 	let ajaxResponse;
	// 	$.ajax({
	// 		url :'http://www.omdbapi.com',
	// 		type : 'get',
	// 		dataType: 'json',
	// 		data: {
	// 			'apikey': 'f9b91bfc',
	// 			's' : 'harry'
	// 		},
	// 		success: function(list) {
	// 			if (list.Response == "True") {
	// 				ajaxResponse=list.Search;
	// 				console.log(ajaxResponse);
					
	// 				$.each(ajaxResponse, function(i,item){
	// 					$('#listMovie').append(`
	// 						<div class="md-col-4 mb-4" style="padding-right: 10px;">
	// 						<div class="card" style="width: 18rem;">
	// 					  		<img src="` + item.Poster + `" class="card-img-top" alt="...">
	// 						  	<div class="card-body">
	// 							    <h5 class="card-title">`+ item.Title  +`</h5>
	// 							    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
	// 							    <a href="#" class="btn btn-primary">Go somewhere</a>
	// 					  		</div>
	// 						</div>`);
	// 				});
						
					
	// 			}else{
	// 				$('listMovie').html('<h1 class="text-center">'+ list.Error +'</h1>')
	// 			}
	// 		}
	// 	});
	// });


		$(document).ready(function(){
			let ajaxResponse;
			$.ajax({
				url :'http://www.omdbapi.com',
				type : 'get',
				dataType: 'json',
				data: {
					'apikey': 'f9b91bfc',
					's' : 'harry'
				},
				success: function(list) {
					if (list.Response == "True") {
						ajaxResponse=list.Search;
						console.log(ajaxResponse);
						
						$.each(ajaxResponse, function(i,item){
							$('#listMovie').append(`
								<div class="md-col-4 mb-4" style="padding-right: 10px;">
								<div class="card" style="width: 18rem;">
							  		<img src="` + item.Poster + `" class="card-img-top" alt="...">
								  	<div class="card-body">
									    <h5 class="card-title">`+ item.Title  +`</h5>
									    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
									    <a href="#" class="btn btn-primary">Go somewhere</a>
							  		</div>
								</div>`);
						});
							
						
					}else{
						$('listMovie').html('<h1 class="text-center">'+ list.Error +'</h1>')
					}
				}
			});
		});

}

export default main;



