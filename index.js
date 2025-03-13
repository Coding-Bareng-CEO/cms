const express = require('express');
const app = express();
const path = require('path');

// konfigurasi static
app.use(express.static(path.join(__dirname, 'public')));

//konfigurasi template
// Set up view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// fase 1: just returning string
app.get('/', (req, res) => {
    res.send('Hello World!!');
});

// fase 2: static file
app.get('/hello', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index2.html'));
});


// fase 3: templating
app.get('/template', (req, res) => {
    res.render('index', { nama: 'Eko'});
});

// Menjalankan server
app.listen(3000, () => {
    console.log(`Server berjalan di http://localhost:3000`);
});