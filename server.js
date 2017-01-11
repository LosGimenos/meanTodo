const PORT = process.env.PORT || 3000;

const express = require('express');
const routes = require('src/server/routes');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

routes(app);

app.all('/*', function(req, res) {
  res.send('\
    <!doctype html>\
    <html>\
      <head>\
        <title>MEAN Todos!</title>\
        <base href="/">\
      </head>\
      <body>\
        <div ui-view></div>\
        <script src="bundle.js"></script>\
      </body>\
    </html>\
  ');
});

app.listen(PORT, function() {
  console.log(`Server running on ${PORT}`);
});
