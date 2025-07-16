const express = require('express')
const app = express();
app.use(express.static('client/public'));
const bodyParser = require('body-parser');
const feedController = require('./controllers/feedController');

// Middleware
app.use(bodyParser.json());
app.use(express.static('client')); // serves frontend files

// Routes (RESTful)
app.route('/api/feed')
    .get(feedController.getAllFeedItems)
    .post(feedController.saveFeedItem);

app.route('/api/feed/:id')
    .get(feedController.getFeedItem)
    .delete(feedController.deleteFeedItem)
    .patch(feedController.updateFeedItem);

app.get('/', function(req, res) {
    res.sendFile('index.html', {root: './client/views'})
})

app.get('/feed', function(req, res) {
    res.sendFile('feed.html', {root: './client/views'})
})

app.listen(1337, () => console.log('Listening on port 1337.'))
