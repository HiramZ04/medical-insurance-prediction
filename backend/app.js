const express = require('express')
const app = express()
const port = 8080
const path = require('path');

const apiRoutes = require('./routes/api');
const distPath = path.join(__dirname, '..', 'frontend', 'dist');

app.use('/assets', express.static(path.join(distPath, 'assets')));
app.use(express.json());
app.use('/api', apiRoutes);

app.get('/', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})