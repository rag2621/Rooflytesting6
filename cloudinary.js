const cloudinary = require('cloudinary').v2;
const dotenv = require('dotenv');

dotenv.config();

cloudinary.config({
  cloud_name: 'dwokkdxn5',
  api_key: '245388128111863',
  api_secret: 'l4KTZBsXqPvVlIz_2TWnpC0l4v4',
});

module.exports = cloudinary;