const express = require('express');
const app = express();
const path = require('path');

// set the /views folder as default for templates
app.set('views', __dirname + '/views');
// set HTML as template rendering engine through http://ejs.co/
app.engine('html', require('ejs').renderFile);

// set the /public folder to access files on client side
app.use(express.static(path.join(__dirname, 'public')));

// set the / root to access for the index.html file
app.get('/', function (req, res) {
  res.render('index.html');
});

// you can set additional routes to any html file
// app.get('/about', function (req, res) {
//   res.render('about.html');
// });

// to watch changes to the files use 'npm start' => http://nodemon.io/ 
app.listen(3000, function () {
  console.log('They see me running... they listening on port 3000!', Date() );
});