exports.seed = function (knex, Promise) {

  return knex('movies').del()
    .then(function () {

      return knex('movies').insert([{

          title: 'Avengers: Infinity War',
          director: 'Anthony Russo',
          year: '2018',
          rating: 8.5,
          posterurl: 'https://upload.wikimedia.org/wikipedia/en/4/4d/Avengers_Infinity_War_poster.jpg'
        },
        {
          title: 'Bohemian Rhapsody',
          director: 'Bryan Singer',
          year: '2018',
          rating: 8.4,
          posterurl: 'https://en.wikipedia.org/wiki/Bohemian_Rhapsody_(film)#/media/File:Bohemian_Rhapsody_poster.png'
        },
        {
          title: 'Aquaman',
          director: 'James Wan',
          year: '2018',
          rating: 8.3,
          posterurl: 'https://upload.wikimedia.org/wikipedia/en/3/3a/Aquaman_poster.jpg'
        },
        {
          title: 'A Star Is Born',
          director: 'Bradley Cooper',
          year: '2018',
          rating: 8.2,
          posterurl: 'https://en.wikipedia.org/wiki/A_Star_Is_Born_(2018_film)#/media/File:A_Star_is_Born.png'
        },
        {
          title: 'Creed II',
          director: 'Steve Caple Jr.',
          year: '2018',
          rating: 7.9,
          posterurl: 'https://en.wikipedia.org/wiki/Creed_II#/media/File:Creed_II_poster.png'
        },
        {
          title: 'Mission: Impossible - Fallout',
          director: 'Christopher McQuarrie',
          year: '2018',
          rating: 7.9,
          posterurl: 'https://en.wikipedia.org/wiki/Mission:_Impossible_%E2%80%93_Fallout#/media/File:MI_%E2%80%93_Fallout.jpg'
        },
        {
          title: 'Incredibles 2',
          director: 'Brad Bird',
          year: '2018',
          rating: 7.9,
          posterurl: 'https://en.wikipedia.org/wiki/Incredibles_2#/media/File:The_Incredibles_2.jpg'
        },
        {
          title: 'Deadpool 2',
          director: 'David Leitch ',
          year: '2018',
          rating: 7.8,
          posterurl: 'https://en.wikipedia.org/wiki/Deadpool_2#/media/File:Deadpool_2_poster.jpg'
        },
      ]);
    });
};