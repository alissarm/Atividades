function getProfile(){
    let name = document.getElementById('name')
    let public_repos = document.getElementById('public_repos')
    let followers = document.getElementById('followers')
    let following = document.getElementById('following')
    let url = document.getElementById('url')

    const username = document.getElementById("username").value;
    fetch("https:/api.github.com/users/" + username)
    .then(res => res.json())
    .then(data => {
        img.innerHTML = `<img src="${data.avatar_url}">`

        name.value = data.name
        login.value = data.login
        public_repos.value = data.public_repos
        followers.value = data.followers
        following.value = data.following
        url.value = data.url
    })
}
