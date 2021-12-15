import express from 'express';
import axios from 'axios';
import cors from 'cors';
const app = express();
const PORT = 8000;

app.use(cors());

app.get('/history', async (_, res) => {
  const historyUrl = 'https://bad-api-assignment.reaktor.com/rps/history';
  const { data } = await axios.get(historyUrl);
  console.log(data);
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
