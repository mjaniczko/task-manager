import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5000;
const ENV = process.env.NODE_ENV || 'development';

const serverRunningMessage = `server running in ${ENV} on port${PORT}`;

app.listen(PORT, () => {
  console.log(serverRunningMessage);
});
