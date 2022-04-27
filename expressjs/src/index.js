
const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');

// paths
const staticPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// view engine setup
app.set('view engine', 'hbs');

// changing views path
app.set('views', viewsPath);

// registering partials
hbs.registerPartials(partialsPath);

app.use(express.static(staticPath));


app.get('/', (req, res) => {
    res.render('index', {title:'To Do'});
});

app.get('/about', (req, res) =>{
    res.render('about', {title:'About Us'});
});

app.get('/contact', (req, res) =>{
    res.render('contact', {title:'Contact Us'});
});

app.get('*', (req, res) =>{
    res.render('404', {title:'404 Page not found !!!'});
});


app.listen(8000, () => {console.log('listening....')});

