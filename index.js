const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const path = require('path');
const supabase = require('./supabase'); // Assuming you have a supabase.js file with the client setup

// konfigurasi static
app.use(express.static(path.join(__dirname, 'public')));
// konfigurasi layout
app.use(expressLayouts); // Menggunakan express-ejs-layouts

//konfigurasi template
// Set up view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// fase 3: templating web 1.0
app.get("/", async (req, res) => {
    const { data: articles, error } = await supabase
        .from('articles')
        .select('*');

    if (error) {
        console.error('Error fetching articles:', error);
        return res.status(500).send('Error fetching articles');
    }

    const headline = {
        title: "Berita Utama Hari Ini",
        summary: "Ringkasan berita utama yang sedang trending.",
        image: "/images/eth.png" // Pastikan ada gambar di folder public/images
    };

    res.render("index", { title: "Beranda", headline, articles });
});

app.get("/about", (req, res) => {
    res.render("about");
});

// fase 1: just returning string
app.get('/hello', (req, res) => {
    res.send('Hello World!!');
});


// fase 3: templating => Web 1.0 => produk cms yang ready to use => saya akan minta mas Niko/SEO untuk ngisi materi SEO disini.
app.get('/template', (req, res) => {
    res.render('index', { nama: 'Eko'});
});

// fase 2: static file
app.get('/static', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'old-index.html'));
});

// fase 4: dynamic templating / server side + client side => Web 2.0 (next.js)
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});