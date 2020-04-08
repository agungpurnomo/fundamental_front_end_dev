function main(){
	window.addEventListener("scroll", function(){
	let navArea = document.getElementById('nav-area');

		if(window.pageYOffset>0){
			navArea.classList.add('cus-nav');
			document.getElementById('searchfeature').style.display = "block"
		}else{
			navArea.classList.remove('cus-nav')
			document.getElementById('searchfeature').style.display = "none"
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
			url :'http://api.alquran.cloud/v1/quran/quran-uthmani',
			type : 'get',
			dataType: 'json',
			
			success: function(list) {
				if (list.status == "OK") {
					ajaxResponse=list;
					console.log(ajaxResponse);
					var surahs0=ajaxResponse.data.surahs[0];
					for(i=1;i<=surahs0.length;i++){
						var surah=surahs0[i];
						$('#listMovie').append(`
							<div class="md-col-4 mb-4" style="padding-right: 10px;">
							<div class="card" style="width: 18rem;">
						  		<img src="" class="card-img-top" alt="...">
							  	<div class="card-body">
								    <h5 class="card-title">`+ surah.number  +`</h5>
								    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
								    <a href="#" class="btn btn-primary">Go somewhere</a>
						  		</div>
							</div>`);
					}

					
						
					
				}else{
					$('#listMovie').html('<h1 class="text-center">'+ list.Error +'</h1>')
				}
			}
		});
	});


}

export default main;



