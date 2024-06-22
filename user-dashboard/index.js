
function Logged_Checker() {
    const token = sessionStorage.getItem('triumph');

    if (token) {
        const splo = token.split("°");
        user_id = thisiswhat(`${splo[0]}`);
        //const nam = splo[1];
        isAdmin = splo[2] == "GIFV" ? true : false;
        wRole = thisiswhat(`${splo[2]}`);
    } else {
        window.location.href = "/"
    }
}

Logged_Checker()