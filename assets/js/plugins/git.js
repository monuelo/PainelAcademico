    $(document).ready(function () {
        $.ajax({
            url: "https://api.github.com/users/hericlesme",
            data: {
                client_id: "5b8e9e5d024b57fdf380",
                client_secret: "c51fd343f72887e614d63622377d178d9d04c6a1"
            }
        }).done(function (user) {
            $("#avatar").html(`
        <img class="thumbnail avatar" src="${user.avatar_url}">
        `);
            $('#followers').html(user.followers);
            $('#following').html(user.following);
            $('#repos').html(user.public_repos);
            $('#company').html(user.company);
            $('#bio').html(user.bio);
            $('#name').html(user.name);
            $('#username').html(`@${user.login}`);
        });
    });