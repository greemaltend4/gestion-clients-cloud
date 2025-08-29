const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Connexion à la base de données
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connecté'))
  .catch(err => console.error(err));

// Routes
app.get('/', (req, res) => {
  res.send('API de gestion des clients');
});

app.listen(PORT, () => {
  console.log(`Serveur en cours d\'exécution sur http://localhost:${PORT}`);
});
