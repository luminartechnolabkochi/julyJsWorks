


const movies = [
    {
      title: "Drishyam",
      year: 2013,
      runtime: 160,
      genre: ["Drama", "Thriller"],
      rating: 8.4
    },
    {
      title: "Premam",
      year: 2015,
      runtime: 156,
      genre: ["Romance", "Comedy"],
      rating: 8.3
    },
    {
      title: "Bangalore Days",
      year: 2014,
      runtime: 171,
      genre: ["Romance", "Drama", "Comedy"],
      rating: 8.3
    },
    {
      title: "Kumbalangi Nights",
      year: 2019,
      runtime: 135,
      genre: ["Drama", "Comedy"],
      rating: 8.6
    },
    {
      title: "Uyare",
      year: 2019,
      runtime: 125,
      genre: ["Drama", "Thriller"],
      rating: 8.1
    },
    {
      title: "Maheshinte Prathikaaram",
      year: 2016,
      runtime: 120,
      genre: ["Comedy", "Drama"],
      rating: 8.3
    },
    {
      title: "Take Off",
      year: 2017,
      runtime: 139,
      genre: ["Drama", "Thriller"],
      rating: 8.3
    },
    {
      title: "Eeda",
      year: 2018,
      runtime: 152,
      genre: ["Romance", "Drama"],
      rating: 7.7
    },
    {
      title: "Thondimuthalum Driksakshiyum",
      year: 2017,
      runtime: 135,
      genre: ["Drama", "Crime"],
      rating: 8.2
    },
    {
      title: "Angamaly Diaries",
      year: 2017,
      runtime: 132,
      genre: ["Action", "Drama"],
      rating: 8.1
    }
  ];

//   ./display total number of movies

console.log(movies.length);

// display all movie names

var allMovieNames=movies.map((m)=>m.title)

// console.log(allMovieNames);

// movies released after year 2014

var yearFilter=movies.filter((m)=>m.year>2014).map((m)=>m.title)

// console.log(yearFilter);


// movie with longest runtime

var lengthyMovie=movies.reduce((m1,m2)=>m1.runtime>m2.runtime?m1:m2)

// console.log(lengthyMovie);

// shortestmovie

var shortestMovie=movies.reduce((m1,m2)=>m1.runtime<m2.runtime?m1:m2)

// console.log(shortestMovie);


// Drama movies 

var dramaMovies=movies.filter((m)=>m.genre.includes("Drama")).map((m)=>m.title)
// console.log(dramaMovies);


// movies with genre either Drama or Action

var actionDramaMovies=movies.filter((m)=>m.genre.includes("Thriller") || m.genre.includes("Action")).map(m=>m.title)
// console.log(actionDramaMovies);


movies.sort((m1,m2)=>m2.rating-m1.rating)

console.log(movies);

// movie with longesttitle

var longetstMovieTitle=movies.reduce((m1,m2)=>m1.title.length>m2.title.length?m1:m2)

console.log(longetstMovieTitle.title);



var DrishyamMovie=movies.find(m=>m.title=="Drishyam")
DrishyamMovie.genre.push("Action")

// console.log(DrishyamMovie);


// in which year most number of movies released

var allYears=movies.map(m=>m.year)

var yearCount={}

allYears.map(y=> y in yearCount ? yearCount[y]+=1 : yearCount[y]=1)

console.log(yearCount);


// in which genre most number of movies released
var allGenres=movies.map(m=>m.genre).flat()

var genreCount={}

allGenres.map(g=>g in genreCount? genreCount[g]+=1:genreCount[g]=1)

console.log(genreCount);



