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


	$(document).ready(function(){
		let ajaxResponse;
		$(".button").click(function(){
			$("#main").html('');
			$(this).addClass("active");
			$.ajax({
				url :'https://api.themoviedb.org/3/trending/all/day?',
				type : 'get',
				dataType: 'json',
				data: {
					'api_key': 'a86239bbc54069065ee3fa0be9e43e65'
				},
				success: function(list) {
					if (list.Response = "True") {
						setTimeout(() => {
							$(".button").removeClass("active");
							ajaxResponse=list.results;
							console.log(ajaxResponse);
							$('#main').append(`<div  class="container mb-4" id="content">			
							</div>`);
							$('#content').append(`<h4>Trending Movie</h4>
							<div id="listMovie" class="row justify-content-center mt-4">
								<div class="loader"></div>
							</div>`);
							$.each(ajaxResponse, function(i,item){
								$('#listMovie').append(`	
									<div class="md-col-3 mb-4" style="padding-right: 10px;">
										<div class="card" style="width: 14rem;">
											<img src="https://image.tmdb.org/t/p/w185_and_h278_bestv2/` + item.poster_path + `" class="card-img-top" alt="...">
											<div class="card-body">
												<h5 class="card-title">`+item.title+`</h5>
												<p class="card-text" style="margin-bottom:0;">`+ $.datepicker.formatDate("yy", new Date(item.release_date)) +`</p>
												<p class="card-text">Rating : `+ item.vote_average +`</p>
												<a href="#" type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" style="border-radius: 1.25rem;
												width: 100%;" >Overview</a>
											</div>
										</div>
									</div>`
								);
							});
						}, 1500);
					}
				}
			});
		});


		$("#search").on('keyup', function(e){
			if (e.keyCode === 13) {
				$('#main').html('');
				$.ajax({
					url :'https://api.themoviedb.org/3/search/movie?',
					type : 'get',
					dataType: 'json',
					data: {
						'api_key': 'a86239bbc54069065ee3fa0be9e43e65',
						'query' : $('#search').val()
					},
					success: function(list) {
						let searchMovie;
						if (list.Response = "True") {
							searchMovie=list.results;
							console.log(searchMovie);
							$('#main').append(`<div  class="container mb-4" id="content">			
							</div>`);
							$('#content').append(`<h4>Search Results For : `+ $('#search').val() +`</h4>
							<div id="listMovie" class="row justify-content-center mt-4">
								<div class="loader"></div>
							</div>`);

							$.each(searchMovie, function(i,item){
								$('#listMovie').append(`	
								<div class="md-col-3 mb-4" style="padding-right: 10px;">
								<div class="card" style="width: 14rem;">
									  <img src="https://image.tmdb.org/t/p/w185_and_h278_bestv2/` + item.poster_path + `" class="card-img-top" alt="...">
									  <div class="card-body">
										<h5 class="card-title">`+item.title+`</h5>
										<p class="card-text">Release date :`+ $.datepicker.formatDate("D dd-M-yy", new Date(item.release_date)) +`</p>
										<p class="card-text">Rating :`+ item.vote_average +`</p>
										<a href="#" type="button" 
										class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" style="border-radius: 1.25rem;
										width: 100%;">Overview</a>
									  </div>
								</div>`);
							});
						}
					}
				});
			}
		});
	});
}


class footerContent extends HTMLElement {
	constructor(){
		super();
		this.shadowDOM =this.attachShadow({mode:"open"});
	}

	connectedCallback(){
		this.render();
	}

	render(){
		this.shadowDOM.innerHTML = `
		<style>
			* {
				margin:0;
				padding:0;
				box-sizing: border-box;
			}

			:host{
				color: black;
				font-weight: 600;
			}

			p{
				padding-top:15px;
			}
		</style>
		
		<p>copyright©2020 - agungp.dicoding</p>`;
	}
}

customElements.define("footer-content", footerContent);


export default main;



