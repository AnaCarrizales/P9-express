const express = require('express');
const app = express();

app.get('/', (req, res)=>{ //se define nuestro route handler
    res.send('Hello World, This is the root route');
});


app.listen(3000);
app.get('/uno', (req, res)=> {
    res.send('Hello World, from the route One'); //De igual forma definimos un route handler, este mensaje lo podremos observar colocándo un diagonal y el nombre de nuestro route en este caso quedaría localhost:300/uno
});

app.get('/prueba', (req, res)=> {
    res.send('Hello World, from the route prueba'); //De igual forma definimos un último route handler, este mensaje lo podremos observar colocándo un diagonal y el nombre de nuestro route en este caso quedaría localhost:300/prueba
});