
function Logged_Checker() {
    const token = sessionStorage.getItem('triumph');

    if (token) {
        const splo = token.split("°");
        const user_id = thisiswhat(`${splo[0]}`);
        const username = thisiswhat(`${splo[1]}`);
        const phonedis = thisiswhat(`${splo[2]}`);
        document.getElementById('usernamedis').innerText = username;
        document.getElementById('phonedis').innerText = phonedis;
    } else {
        window.location.href = "/"
    }

    AdminData_rendering()
}

Logged_Checker();

function Deconnexion() {
    var result = window.confirm("Voulez vous vraiment vous déconnectez?");
    if (result) {
        sessionStorage.clear();
        window.location.href = "/"
    }

}


async function AdminData_rendering() {
    const houses = await GetAllHouses();
    document.getElementById('locationa').innerText = houses.length;
    /*document.getElementById('enventa').innerText = houses.length;
    document.getElementById('enventb').innerText = houses.length;*/

}