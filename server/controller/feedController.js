// server/controllers/feedController.js
const { FeedItem, feedItems } = require('../models/feedItem');

// GET all
exports.getAllFeedItems = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(feedItems);
};

// POST new
exports.saveFeedItem = (req, res) => {
    const { title, body, linkUrl, imageUrl } = req.body;
    const newItem = new FeedItem(title, body, linkUrl, imageUrl);
    feedItems.push(newItem);
    res.setHeader('Content-Type', 'application/json');
    res.status(201).send(newItem);
};

// GET by ID
exports.getFeedItem = (req, res) => {
    const item = feedItems.find(f => f.id == req.params.id);
    item ? res.send(item) : res.status(404).send({ error: "Not found" });
};

// DELETE by ID
exports.deleteFeedItem = (req, res) => {
    const index = feedItems.findIndex(f => f.id == req.params.id);
    if (index !== -1) {
        feedItems.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).send({ error: "Not found" });
    }
};

// PATCH (update) by ID
exports.updateFeedItem = (req, res) => {
    const item = feedItems.find(f => f.id == req.params.id);
    if (!item) return res.status(404).send({ error: "Not found" });

    const { title, body, linkUrl, imageUrl } = req.body;
    if (title) item.title = title;
    if (body) item.body = body;
    if (linkUrl) item.linkUrl = linkUrl;
    if (imageUrl) item.imageUrl = imageUrl;

    res.send(item);
};
