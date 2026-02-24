const express = require('express')
const app = express()
const port = 8080
const path = require('path');

const distPath = path.join(__dirname, '..', 'frontend', 'dist');

app.use('/assets', express.static(path.join(distPath, 'assets')));

app.get('/', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

const apiRoutes = require('./routes/api');

app.use('/api', apiRoutes);

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})