import express from 'express';

const app = express();

// Config ejs
app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Home Page',
        message: 'Welcome to my website!',
        people: ['John', 'Jane', 'Bob'],
    });
});

app.listen(8000, () => {
    console.log('Server is running on port 8000');
});