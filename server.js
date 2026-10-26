const express = require('express');
const app = express();
const PORT = 4000;

//Gelen butun requestleri terminalda gosterir
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'My first server' });
});
``
app.get('/api/hello', (req, res) => {
  res.json({ 
    message: 'Salam Flutter-den!',
    timestamp: new Date().toISOString()
  });
});

app.get('/api/cingiz', (req , res)=> {
  res.json({
    message : "u've got this"
  })
})


app.listen(PORT, () => {
  console.log(`Server http://localhost:${PORT} unvaninda ishleyir`);
});