const express = require('express');
const app = express();

app.get('/', (req, res) => {
  // Simulate asynchronous operation (e.g., database query)
  setTimeout(() => {
    res.send('Hello World!');
  }, 5000);
});

//Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});