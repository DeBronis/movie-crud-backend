exports.seed = function (knex, Promise) {

  return knex('movies').del()
    .then(function () {

      return knex('movies').insert([{

          title: 'Avengers: Infinity War',
          director: 'Anthony Russo',
          year: '2018',
          rating: 8.5,
          posterurl: 'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_.jpg'
        },
        {
          title: 'Bohemian Rhapsody',
          director: 'Bryan Singer',
          year: '2018',
          rating: 8.4,
          posterurl: 'https://images-na.ssl-images-amazon.com/images/I/71pciysJTxL._SY679_.jpg'
        },
        {
          title: 'Aquaman',
          director: 'James Wan',
          year: '2018',
          rating: 8.3,
          posterurl: 'https://cdn1.thr.com/sites/default/files/imagecache/NFE_portrait/2018/07/aquaman_poster_-_screengrab_-_p_2018.jpg'
        },
        {
          title: 'A Star Is Born',
          director: 'Bradley Cooper',
          year: '2018',
          rating: 8.2,
          posterurl: 'https://m.media-amazon.com/images/M/MV5BMjE3MDQ0MTA3M15BMl5BanBnXkFtZTgwMDMwNDY2NTM@._V1_.jpg'
        },
        {
          title: 'Creed II',
          director: 'Steve Caple Jr.',
          year: '2018',
          rating: 7.9,
          posterurl: 'https://m.media-amazon.com/images/M/MV5BMTcxMjUwNjQ5N15BMl5BanBnXkFtZTgwNjk4MzI4NjM@._V1_UX182_CR0,0,182,268_AL_.jpg'
        },
        {
          title: 'Mission: Impossible - Fallout',
          director: 'Christopher McQuarrie',
          year: '2018',
          rating: 7.9,
          posterurl: 'https://m.media-amazon.com/images/M/MV5BNjRlZmM0ODktY2RjNS00ZDdjLWJhZGYtNDljNWZkMGM5MTg0XkEyXkFqcGdeQXVyNjAwMjI5MDk@._V1_.jpg'
        },
        {
          title: 'Incredibles 2',
          director: 'Brad Bird',
          year: '2018',
          rating: 7.9,
          posterurl: 'https://i.pinimg.com/originals/f8/30/77/f830779eb2117ba1c80ec0212e08f1f8.jpg'
        },
        {
          title: 'Deadpool 2',
          director: 'David Leitch ',
          year: '2018',
          rating: 7.8,
          posterurl: 'https://m.media-amazon.com/images/M/MV5BNjk1Njk3YjctMmMyYS00Y2I4LThhMzktN2U0MTMyZTFlYWQ5XkEyXkFqcGdeQXVyODM2ODEzMDA@._V1_UY268_CR43,0,182,268_AL_.jpg'
        },
      ]);
    });
};