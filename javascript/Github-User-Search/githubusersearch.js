document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");
    const userInfo = document.getElementById("userInfo");

    searchButton.addEventListener("click", () => {
        const username = searchInput.value.trim();
        if (username === "") return;

        fetch(`https://api.github.com/users/${username}`)
            .then((response) => response.json())
            .then((data) => {
                userInfo.innerHTML = `
                    <h2>${data.login}</h2>
                    <img src="${data.avatar_url}" alt="Profile Picture">
                    <p>Name: ${data.name || "N/A"}</p>
                    <p>Location: ${data.location || "N/A"}</p>
                    <p>Followers: ${data.followers}</p>
                    <p>Following: ${data.following}</p>
                `;
            })
            .catch((error) => {
                console.error(error);
                userInfo.innerHTML = "<p>User not found</p>";
            });
    });
});
