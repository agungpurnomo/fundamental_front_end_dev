function main(){
	window.addEventListener("scroll",()=>{
	let navArea = document.getElementById('nav-area');

		if(window.pageYOffset>0){
			navArea.classList.add('cus-nav');
			document.getElementById('searchfeature').style.display = "block"
		}else{
			navArea.classList.remove('cus-nav')
			document.getElementById('searchfeature').style.display = "none"
		}
	});


	$(document).ready(()=>{
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
				success: (list)=> {
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
							$.each(ajaxResponse, (i,item)=>{
								$('#listMovie').append(`	
									<div class="md-col-3 mb-4" style="padding-right: 10px;">
										<div class="card" style="width: 14rem;">
											<img src="https://image.tmdb.org/t/p/w185_and_h278_bestv2/` + item.poster_path + `" class="card-img-top" alt="...">
											<div class="card-body">
												<h5 class="card-title">`+item.title+`</h5>
												<p class="card-text" style="margin-bottom:0;"></p>
												<p class="card-text">Rating : `+ item.vote_average +`</p>
<<<<<<< HEAD
												<a href="#" type="button" class="btn btn-primary" id="btn-detail" style="border-radius: 1.25rem;
												width: 100%;" >Overview</a>
=======
												<!--<a href="#" type="button" class="btn btn-primary"  style="border-radius: 1.25rem;
												width: 100%;" >Overview</a>-->
>>>>>>> 6fbb7032adc7de266497e1ed6a900f4c285f89d3
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
					success: (list)=> {
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

							$.each(searchMovie, (i,item)=>{
								$('#listMovie').append(`	
								<div class="md-col-3 mb-4" style="padding-right: 10px;">
								<div class="card" style="width: 14rem;">
									  <img src="https://image.tmdb.org/t/p/w185_and_h278_bestv2/` + item.poster_path + `" class="card-img-top" alt="...">
									  <div class="card-body">
										<h5 class="card-title">`+item.title+`</h5>
										<p class="card-text">Release date :</p>
										<p class="card-text">Rating :`+ item.vote_average +`</p>
<<<<<<< HEAD
										<a href="#" type="button" 
										class="btn btn-primary"  id="btn-detail" style="border-radius: 1.25rem;
										width: 100%;">Overview</a>
=======
										<!--<a href="#" type="button" 
										class="btn btn-primary"  style="border-radius: 1.25rem;
										width: 100%;">Overview</a>-->
>>>>>>> 6fbb7032adc7de266497e1ed6a900f4c285f89d3
									  </div>
								</div>`);
							});
						}
					}
				});
			}
		});

		$("#btn-detail").click(function(){
			$("#myModal").modal();
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



