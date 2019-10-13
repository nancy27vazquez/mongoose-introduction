const mongoose = require('mongoose');

// PASO 1 Conectar mongoose a una base de datos
// primero busca si existe y si no la crea
mongoose
  .connect('mongodb://localhost/exampleApp', {useNewUrlParser: true})
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch(err => console.error('Error connecting to mongo', err));


// PASO 2 crear el modelo 
  const Cat = mongoose.model('Cat', { name: String});


// PASO 3 crear un nuevo dato siguiendo ese modelo, que se salvarà en la base recién creada
  const kitty = new Cat({
    name: 'Ironhacker'
  });

  kitty.save()
  .then(newCat => console.log(`A new cat is created ${newCat}`))
  .catch(err => console.log(`Error by creating a new cat ${err}`));

