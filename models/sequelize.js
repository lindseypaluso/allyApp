var Sequelize = require('sequelize');
var BooksModel = require('./books.js');
var ChildrensBooksModel = require('./childrensBooks.js');
var PodcastsModel = require('./podcasts.js');
var ArticlesModel = require('./articles.js');
var WatchLongModel = require('./toWatch_long.js');
var WatchShortModel = require('./toWatch_short.js');

var sequelize = new Sequelize("database", "username", "password", {
    host: "localhost",
    dialect: "mysql",
    database: "allyApp",
    username: "root",
    password: "root"
});

var Books = BooksModel(sequelize, Sequelize);
var ChildrensBooks = ChildrensBooksModel(sequelize, Sequelize);
var Podcasts = PodcastsModel(sequelize, Sequelize);
var Articles = ArticlesModel(sequelize, Sequelize);
var WatchLong = WatchLongModel(sequelize, Sequelize);
var WatchShort = WatchShortModel(sequelize, Sequelize);

// sequelize.sync({ force: true })
// .then(() => {
//     console.log(`Database & tables created!`);
// });

// module.exports = {
//   Books,
//   ChildrensBooks,
//   Podcasts,
//   Articles,
//   WatchLong,
//   WatchShort,
//   sequelize
// }
