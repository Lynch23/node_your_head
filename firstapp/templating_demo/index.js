const express = require('express');
const app = express();
const path = require('path');
const subreddits = require('./data.json');

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, '/views'));

app.listen(3000, () => {
    console.log('listening on port 3000');
});

app.get('/', (req, res) => {
    res.render('home');
})
app.get('/cats', (req, res) => {
    res.render('cats');
})
app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 50) + 1;
    const isEven = num % 2 === 0;
    res.render('random', { num, isEven });
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    const topic = subreddits[subreddit];
    topic ? res.render('subreddit', { topic }) : res.render('notfound', { subreddit });
})
