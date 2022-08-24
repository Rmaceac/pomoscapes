const express = require("express");
const app = express();

app.get('/', (req, res) => {
  console.log('Here');
  res.status(200).send('You did it!')

})
app.listen(8080);
