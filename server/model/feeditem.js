class FeedItem {
    constructor(title, body, linkUrl, imageUrl) {
        this.id = FeedItem.incrementId();  // Unique ID for each item
        this.title = title;
        this.body = body;
        this.linkUrl = linkUrl;
        this.imageUrl = imageUrl;
    }

    static incrementId() {
        FeedItem.currentId = (FeedItem.currentId || 0) + 1;
        return FeedItem.currentId;
    }
}

const feedItems = []; // acts like our fake database

module.exports = { FeedItem, feedItems };
