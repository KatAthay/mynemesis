const express = require("express");
const { json, urlencoded } = express;
const apiRouter = require("./router");

const app = express();
const PORT = 4000;

app.use(json());
app.use(urlencoded({ extended: true }));

/*
Example url request coming in from client/user

http://localhost:3000/tweets/elonmusk/bitcoin,fungible,valuation/10

Use this for testing in postman

*/

// mount router
app.use("/tweets", apiRouter);

// catch-all route handler for any requests to an unknown route
app.use((_req, res) =>
  res.status(404).send("This is not the page you're looking for...")
);

//express error handler
app.use((err, _req, res, _next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 500,
    message: { err: "An error occurred" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = { PORT, app };
