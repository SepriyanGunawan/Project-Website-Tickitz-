const genreMap = {};

const fetchData = async () => {
  try {
    const token = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OTMzZjk5OTZiNWZlMDI3ODJiZjE0OTdiYzhjM2UwZSIsIm5iZiI6MTcwMzc2NzU1MS40OTEwMDAyLCJzdWIiOiI2NThkNmRmZjU1YzFmNDYyNTIzOWEyNDciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ArmZWxQP_bLbXulley_Zs3Ey7JYib-DHMdo1UMKuy9o`;

    const [genreRes, movieRes] = await Promise.all([
      axios.get(`https://api.themoviedb.org/3/genre/movie/list?language=en-US`, {
        headers: { Authorization: token },
      }),
      axios.get(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`, {
        headers: { Authorization: token },
      }),
    ]);

    // Buat loping genre ID ke nama
    genreRes.data.genres.forEach((genre) => {
      genreMap[genre.id] = genre.name;
    });

    const movies = movieRes.data.results;

    renderMovies(movies);
  } catch (err) {
    console.error('Failed to fetch data', err);
  }
};

const renderMovies = (movies) => {
  //   const container = document.getElementById('movie-container');
  //   container.innerHTML = '';
  console.log(movies);
  console.log(movies[0].poster_path);
  const textTitle = document.querySelector('.details-texts h1');
  textTitle.textContent = `${movies[0].original_title}`;
  //   img poster
  const posterimg = document.querySelector('.img-details img');
  posterimg.src = `https://image.tmdb.org/t/p/w500${movies[0].poster_path}`;
  // poster
  //   genre btn
  const btngenre = document.querySelector('.genre-btn');
  btngenre.innerHTML = movies[0].genre_ids.map((id) => `<span class="bg-gray-200 text-xs rounded-full px-2 py-1 text-gray-700">${genreMap[id]}</span>`).join(' ');
  // genre btn
  const movieBener = document.querySelector('.benner-movie');
  movieBener.style.backgroundImage = `url(https://image.tmdb.org/t/p/w500${movies[0].backdrop_path})`;
  // reselated date
  const reselatedDate = document.querySelector('.date-movie h3');
  reselatedDate.textContent = `${movies[0].release_date}`;
  // deskription
  const deskriptionMovie = document.querySelector('.details-inf-movie p');
  deskriptionMovie.textContent = `${movies[0].overview}`;

  console.log(movieBener);
  //   movies.forEach((movie) => {
  //     const genres = movie.genre_ids.map((id) => genreMap[id]).join(', ');
  //     const genreTags = movie.genre_ids.map((id) => `<span class="bg-gray-200 text-xs rounded-full px-2 py-1 text-gray-700">${genreMap[id]}</span>`).join(' ');
  //     // carrd movie
  //     const movieCard = `
  //           <div class=" rounded-xl shadow relative">
  //             <div class="relative group">
  //               <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" class="rounded-lg w-full h-[405px] object-cover" />
  //               <span class="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">Recommended</span>
  //              <div class=" gap-2 top-0 absolute flex-col w-[100%] h-[100%] bg-[#0000005b] items-center justify-center hidden group-hover:flex rounded-lg">
  //               <button class="border px-3 py-2 rounded hover:bg-gray-200 hover:text-black text-sm w-[150px] text-[#ffff]">Details</button>
  //               <button class="bg-blue-600 text-white px-3 py-2 rounded text-sm w-[150px]">Buy Ticket</button>
  //             </div>
  //             </div>
  //             <h3 class="my-3 mx-2 text-sm font-semibold text-[24px]">${movie.title}</h3>
  //             <div class="my-2 mx-2 flex gap-2 flex-wrap">${genreTags}</div>

  //           </div>
  //         `;
  //     container.innerHTML += movieCard;
  //   });
};

fetchData();
