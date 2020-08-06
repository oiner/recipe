const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.get("/", (request, response) => {
  response.json({ info: "Hello from node" });
});

app.get("/todo", (request, response) => {
  const dbResponse = someFunc();
  response.json(dbResponse);
});

app.listen(port, () => {
  console.log(`App is now listening on port ${port}....`);
});

const someFunc = () => {
  return {
    todo: {
      id: 1,
      name: "make your bed"
    }
  };
};
