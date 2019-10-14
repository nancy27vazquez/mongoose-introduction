const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// PASO 1 Conectar mongoose a una base de datos
// primero busca si existe y si no la crea
mongoose
  .connect("mongodb://localhost/exampleApp", { useNewUrlParser: true })
  .then(x =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch(err => console.error("Error connecting to mongo", err));

// PASO 2  Los lineamientos del modelo, reglas de creación
const catSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    min: 0,
    max: 30
  },
  color: {
    type: String,
    enum: ["white", "black", "brown"]
  },
  avatarUrl: {
    type: String,
    default: "images/default-avatar.png"
  },
  location: {
    address: String,
    city: String
  },
  countryCode: {
    type: String,
    match: /^[A-Z]{2}$/
  },
  created: {
    type: Date,
    default: Date.now
  }
});

// PASO 3 crear el modelo
const Cat = mongoose.model("Cat", catSchema);

module.exports = Cat;

// PASO 3 crear un nuevo dato siguiendo ese modelo, que se salvarà en la base recién creada
const kitty = new Cat({
  name: "Ironhacker",
  color: "white",
  age: 2
});

kitty
  .save()
  .then(newCat => console.log(`A new cat is created ${newCat}`))
  .catch(err => console.log(`Error by creating a new cat ${err}`));
