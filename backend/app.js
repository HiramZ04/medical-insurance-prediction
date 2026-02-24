const express = require('express')
const app = express()
const port = 8080


app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const apiRoutes = require('./routes/api');

app.use('/api', apiRoutes);

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})