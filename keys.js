//console.log('this is loaded');
require('dotenv').config();
exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};

exports.omdb = {
    apiID: process.env.OMDB_API_KEY
    //secret: process.env.OMDb_SECRET
  };






  // console.log('this is loaded');
// require('dotenv').config();
//require('dotenv').config();
//exports.spotify = {
//  id: process.env.SPOTIFY_ID,
//  secret: process.env.SPOTIFY_SECRET
//};
//exports.omdb ={
//  apiID: process.env.OMDB_API_KEY
//}
