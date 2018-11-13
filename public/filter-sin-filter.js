/**
 * Use forEach to collect only those videos with a rating of 5.
 */

const newReleases = [{
        "id": 70111470,
        "title": "Die Hard",
        "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
        "bookmark": []
    },
    {
        "id": 654356453,
        "title": "Bad Boys",
        "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0,
        "bookmark": [{ id: 432534, time: 65876586 }]
    },
    {
        "id": 65432445,
        "title": "The Chamber",
        "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
        "bookmark": []
    },
    {
        "id": 675465,
        "title": "Fracture",
        "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0,
        "bookmark": [{ id: 432534, time: 65876586 }]
    }
];





//const releasesFive = [];

/*
newReleases.forEach(function(element) {
 if(Number(element.rating) >= 5) {
   releasesFive.push(element)
   
 }
 
});

 console.log(releasesFive);
*/


/*

const releasesFive = newReleases.map(function(movie) {
  if(movie.rating === 5) {
      return movie;
  }
          
});

 console.log(releasesFive);
 
 */


/*

const filtered = newReleases.filter(function(movie) {
  if(movie.rating === 5) {
      return movie;
  }
          
});

console.log(filtered);


*/



const filtered = newReleases.filter(function(movie) {
    if (movie.rating === 5) {
        return movie;
    }

});

console.log(filtered);