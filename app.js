const express = require('express');
const app = express();

app.get('/', (req, res)=>{ //se define nuestro route handler
    res.send('Hello World, This is the root route');
});


app.listen(3000);
app.get('/uno', (req, res)=> {
    res.send('Hello World, from the route One');
});

app.get('/prueba', (req, res)=> {
    res.send('Hello World, from the route prueba');
});