const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const router = express.Router();

app.get('/rock', (req, res) => {
  res.send('i\'m the rock paper scissor page');
});

// app.get('/', (req, res) => {
//   res.send('home page from server greeb');
// })

// app.use('/', router);
app.use('/rock', router);

app.listen(port);
console.log('magic happens on port ' + port);
