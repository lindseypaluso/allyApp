$(document).ready(function () {
    /* global moment */

    // blogContainer holds all of our posts
    var blogContainer = $(".blog-container");
    // Click events for the connect buttons; finish function in line 90
    $(document).on("click", "button.connect", connect);
    // Variable to hold our posts
    var posts;

    // The code below handles the case where we want to get blog posts for a specific user
    // Looks for a query param in the url for user_id
    var url = window.location.search;
    var userId;
    if (url.indexOf("?user_id=") !== -1) {
        userId = url.split("=")[1];
        getPosts(userId);
    }
    // If there's no userId we just get all posts as usual
    else {
        getPosts();
    }

    // This function grabs posts from the database and updates the view
    function getPosts(username) {
        userId = username || "";
        if (userId) {
            userId = "/?user_id=" + userId;
        }
        $.get("/api/help" + userId, function (data) {
            console.log("Posts", data);
            posts = data;
            if (!posts || !posts.length) {
                displayEmpty(username);
            }
            else {
                initializeRows();
            }
        });
    }

    // This function displays a message when there are no posts (not working)
    function displayEmpty(id) {
        var query = window.location.search;
        var partial = "";
        if (id) {
            partial = " for User #" + id;
        }
        blogContainer.empty();
        var message = $("<h2>");
        message.css({ "text-align": "center", "margin-top": "50px" });
        message.handlebars("No posts yet" + partial + ", navigate <a href='/form" + query +
            "'>here</a> in order to get started.");
        blogContainer.append(message);
    }

});
