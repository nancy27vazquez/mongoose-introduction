const express = require('express');
const app = express();

app.set('views', `${__dirname}/views`);
app.use(express.static('public'));
app.set('view engine', 'pug');


app.get('/city-list', (req, res) => {
  let cities = ['Miami', 'Madrid', 'Barcelona'];
  res.render('cities/list', {
    cities: cities
  });
});

  
app.listen(3000, () => {
  console.log("Everything is ok for now, nan");
})