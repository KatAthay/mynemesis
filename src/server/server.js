const path = require("path");
const express = require("express");
// console.log(express)
// const mongoose = require('mongoose')
const app = express();
const PORT = 3001;

// const mongoURI = process.env.NODE_ENV === 'test' ? 'mongodb://localhost/unit11test' : 'mongodb://localhost/unit11dev';
// mongoose.connect(mongoURI);

/* handle parsing request body */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// handle requests for static files (OUR HTML FILE)
// app.use(express.static(path.resolve(__dirname, '../client')));

// define route handlers
// app.use("/api", apiRouter);

// catch-all route handler for any requests to an unknown route
app.use((req, res) =>
  res.status(404).send("This is not the page you're looking for...")
);

//express error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 500,
    message: { err: "An error occurred" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

//start server
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;
