const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/health', (req, res) => {
  res.json({ status: 'alive', service: 'Eterna', time: new Date().toISOString() });
});

const port = process.env.PORT || 10000;
app.listen(port, () => console.log(`Eterna health listening on ${port}`));

