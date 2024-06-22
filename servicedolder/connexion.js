async function Connexion() {
    const phone = document.getElementById('inputs_phone').value;
    const password = document.getElementById('inputs_password').value;
    const loading = document.getElementById('connextion');

    if (phone && password) {
        loading.removeAttribute("onclick");

        const data = {
            phone: phone,
            motdepass: password,

        };
        const response = await requesttoBackend('POST', 'usertriumph/login', data);

        if (!response) {
            alert("Échec, vérifiez votre connexion ou essayez plus tard.");

            loading.setAttribute("onclick", "Connexion()");
        } else if (response.token) {
            const splo = response.token.split("°");
            user_id = thisiswhat(`${splo[0]}`);
            //console.log(user_id);//66773ca3320d8b6299fff03a
            sessionStorage.setItem('triumph', response.token);
            window.location.href = "/dashboard";
        } else if (response.ee) {
            alert("Identifient inccorect");
            loading.setAttribute("onclick", "Connexion()");
        }

    } else {
        alert("Renseignez tous.");


    }

};
