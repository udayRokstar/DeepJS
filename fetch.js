const https = require('https');
const fs = require('fs');

const agent = new https.Agent({
  ca: fs.readFileSync('./certs/your-ca.crt')
});

https.get('https://example.org/products.json', { agent }, (res) => {
  res.on('data', (chunk) => console.log(chunk.toString()));
});
