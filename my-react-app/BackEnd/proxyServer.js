const express = require('express');
const axios = require('axios');

const app = express();
const port = 3001; // Choose a port for your proxy server

app.use(express.json());

app.get('/api/motogp/seasons', async (req, res) => {
  const apiKey = 'kevrm5qvp7u49hd3qqw7hvum';
  const locale = 'en_US';

  try {
    const response = await axios.get(
      `https://api.sportradar.us/motogp/trial/v2/${locale}/seasons.json?api_key=${apiKey}`
    );
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching MotoGP seasons:', error);
    res.status(500).json({ error: 'Failed to fetch MotoGP seasons' });
  }
});

app.listen(port, () => {
  console.log(`Proxy server is running on port ${port}`);
});
