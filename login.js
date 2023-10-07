function performLogin() {
    const username = document.getElementById("username").value;
    if (username) {
        localStorage.setItem('username', username);
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = "index.html";
    }
}