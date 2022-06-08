require('dotenv').config();

const express = require('express');
const router = require('./app/router');
const session = require('express-session');

const app = express();

const PORT = process.env.PORT || 5000;




app.set("view engine", "ejs");
app.set("views", "./app/views");
app.use(express.static('./public'));

app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: "Guess it!",
  cookie: {
    secure: false,
    maxAge: (1000*60*60) // ça fait une heure
  }
}));

app.use(express.urlencoded({ extended: true }));






app.use(router);



app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});