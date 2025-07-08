console.log("feed.js is running");


// 1. Redirect to my.marist.edu when portal_button is clicked
document.addEventListener("DOMContentLoaded", function () {
  const portal = document.getElementById("portal_button");
  if (portal) {
    portal.addEventListener("click", function () {
      goToLocation("http://my.marist.edu");
    });
  }

  // 2. FeedItem constructor
  function FeedItem(title, body, linkUrl, imageUrl) {
    this.title = title;
    this.body = body;
    this.linkUrl = linkUrl;
    this.imageUrl = imageUrl;
  }

  // 3. Sample stories - Made using AI
  const currentStories = [
    new FeedItem(
      "Campus News",
      "Marist expands its science building with new labs.",
      "https://www.marist.edu/news",
      "/images/hancock.jpeg"
    ),
    new FeedItem(
      "Red Foxes Win!",
      "Marist football team secures a big win this weekend.",
      "https://www.marist.edu/athletics",
      "/images/news_pic.jpg"
    ),
    new FeedItem(
      "Upcoming Events",
      "Don’t miss Family Weekend coming up soon!",
      "https://www.marist.edu/events",
      "/images/campus.png"
    )
  ];

  // 4. Display function
  function displayItem(feedItem) {
    const feed = document.getElementById("newsfeed");
    feed.innerHTML += `
      <div class="feedItem">
        <h2>${feedItem.title}</h2>
        <img class="feedImage" src="${feedItem.imageUrl}" alt="${feedItem.title}">
        <p>${feedItem.body}</p>
        <a href="${feedItem.linkUrl}" target="_blank">Read more</a>
      </div>
    `;
  }

  // 5. Display all items
  currentStories.forEach(item => displayItem(item));
});
