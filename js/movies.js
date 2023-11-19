 const Movies = function render(){
	return`
<section >
	<div>
		<label>اختار نوع الفلم</label>
		<select name="movies-drop-list" id="movies-drop-list">
			<option value="الكل">الكل</option>
			<option value="اكشن">اكشن</option>
			<option value="دراما">دراما</option>
			<option value="خيال علمي">خيال علمي</option>
			<option value="كوميدي">كوميدي</option>
		</select>
	</div>


	<section class="section movies slider has-arrows is-suggested">
		<div class="container">
			<h3 class="section-title">إقتراحتنا لك</h3>
			<ul class="moviesGrid">
				<li class="movie">
					<a href="#/details">
						<img src="images/movie1.svg" />
						<span class="movie-description">
							<span class="play-icon"><i class="fas fa-play"></i></span>
							The Maze Runner
						</span>
					</a>
				</li>
				<li class="movie">
					<a href="#/details">
						<img src="images/movie2.svg" />
						<span class="movie-description">
							<span class="play-icon"><i class="fas fa-play"></i></span>
							Breaking Bad
						</span>
					</a>
				</li>
				<li class="movie">
					<a href="#/details">
						<img src="images/movie3.svg" />
						<span class="movie-description">
							<span class="play-icon"><i class="fas fa-play"></i></span>
							Peaky Blinders
						</span>
					</a>
				</li>
				<li class="movie">
					<a href="#/details">
						<img src="images/movie4.svg" />
						<span class="movie-description">
							<span class="play-icon"><i class="fas fa-play"></i></span>
							The Good Doctor
						</span>
					</a>
				</li>
			</ul>
		</div>
	</section>
</section>

<section class="section movies slider has-arrows is-trending">
	<div class="container">
		<h3 class="section-title">الأكثر مشاهدة</h3>
		<ul class="moviesGrid">
			<li class="movie">
				<a href="#/details">
					<img src="images/movie2.svg" />
					<span class="movie-description">
						<span class="play-icon"><i class="fas fa-play"></i></span>
						Breaking Bad
					</span>
				</a>
			</li>
			<li class="movie">
				<a href="#/details">
					<img src="images/movie3.svg" />
					<span class="movie-description">
						<span class="play-icon"><i class="fas fa-play"></i></span>
						Peaky Blinders
					</span>
				</a>
			</li>
			<li class="movie">
				<a href="#/details">
					<img src="images/movie4.svg" />
					<span class="movie-description">
						<span class="play-icon"><i class="fas fa-play"></i></span>
						The Good Doctor
					</span>
				</a>
			</li>
			<li class="movie">
				<a href="#/details">
					<img src="images/movie1.svg" />
					<span class="movie-description">
						<span class="play-icon"><i class="fas fa-play"></i></span>
						The Maze Runner
					</span>
				</a>
			</li>
		</ul>
	</div>
</section>`;}
export default Movies;


