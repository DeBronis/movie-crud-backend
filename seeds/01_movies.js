exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('movies').insert([{

          Title: 'Avengers: Infinity War',
          Director: 'Anthony Russo',
          Year: '2018',
          Rating: 8.5,
          Poster_Url: 'https://upload.wikimedia.org/wikipedia/en/4/4d/Avengers_Infinity_War_poster.jpg'
        },
        {
          Title: 'Bohemian Rhapsody',
          Director: 'Bryan Singer',
          Year: '2018',
          Rating: 8.4,
          Poster_Url: 'https://en.wikipedia.org/wiki/Bohemian_Rhapsody_(film)#/media/File:Bohemian_Rhapsody_poster.png'
        },
        {
          Title: 'Aquaman',
          Director: 'James Wan',
          Year: '2018',
          Rating: 8.3,
          Poster_Url: 'https://upload.wikimedia.org/wikipedia/en/3/3a/Aquaman_poster.jpg'
        },
        {
          Title: 'A Star Is Born',
          Director: 'Bradley Cooper',
          Year: '2018',
          Rating: 8.2,
          Poster_Url: 'https://en.wikipedia.org/wiki/A_Star_Is_Born_(2018_film)#/media/File:A_Star_is_Born.png'
        },
        {
          Title: 'Creed II',
          Director: 'Steve Caple Jr.',
          Year: '2018',
          Rating: 7.9,
          Poster_Url: 'https://en.wikipedia.org/wiki/Creed_II#/media/File:Creed_II_poster.png'
        },
        {
          Title: 'Mission: Impossible - Fallout',
          Director: 'Christopher McQuarrie',
          Year: '2018',
          Rating: 7.9,
          Poster_Url: 'https://en.wikipedia.org/wiki/Mission:_Impossible_%E2%80%93_Fallout#/media/File:MI_%E2%80%93_Fallout.jpg'
        },
        {
          Title: 'Incredibles 2',
          Director: 'Brad Bird',
          Year: '2018',
          Rating: 7.9,
          Poster_Url: 'https://en.wikipedia.org/wiki/Incredibles_2#/media/File:The_Incredibles_2.jpg'
        },
        {
          Title: 'Deadpool 2',
          Director: 'David Leitch ',
          Year: '2018',
          Rating: 7.8,
          Poster_Url: 'https://en.wikipedia.org/wiki/Deadpool_2#/media/File:Deadpool_2_poster.jpg'
        },
      ]);
    });
};