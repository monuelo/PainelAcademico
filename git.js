$(document).ready(function() {
  // Make request to Github
  $.ajax({
    url: "https://api.github.com/users/hericlesme",
    data: {
      client_id: "5b8e9e5d024b57fdf380",
      client_secret: "c51fd343f72887e614d63622377d178d9d04c6a1"
    }
  }).done(function(user) {
    $("#avatar").html(`
        <img class="thumbnail avatar" src="${user.avatar_url}">
        `);

    $("#followers").html(`
    <h1>eae</h1>
    `);
    $("#following").html(user.following);

    $("#profile").html(`
                <span class="label label-success">Followers: ${
                  user.followers
                }</span>
                <span class="label label-info">Following: ${
                  user.following
                }</span>
        `);
  });
});
