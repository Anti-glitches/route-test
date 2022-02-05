const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res)=>{
    res.redirect('/home');
});

app.get('/home', (req, res)=>{
    const title = req.url.slice(1);
    res.render('home', {title});
});

app.get('/pricing', (req, res)=>{
    const title = req.url.slice(1);
    res.render('pricing', {title});
});

app.get('/about', (req, res)=>{
    const title = req.url.slice(1);
    res.render('about', {title});
});

app.get('/contact', (req, res)=>{
    const title = req.url.slice(1);
    res.render('contact', {title});
});

app.get('*', (req, res)=>{
    res.send('<h1>Error 404, page not found</h1>')
});


app.listen(3000, ()=>{
    console.log('Listening on port 3000');
});

