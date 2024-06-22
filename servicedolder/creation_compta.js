let role;
const roleSeta = (roleva) => {
    role = roleva;
    console.log(roleva);
};

async function CreationCompte() {
    const input_name = document.getElementById('input_name').value;
    const input_tel = document.getElementById('input_tel').value;
    const input_pass = document.getElementById('input_pass').value;
    const input_conf = document.getElementById('input_conf').value;

    const loading = document.getElementById('creaxion');

    if (input_name && input_tel && role) {
        if (input_pass === input_conf) {
            loading.removeAttribute("onclick");

            const data = {
                phone: input_tel,
                nomcomplet: input_name,
                motdepass: input_pass,
                service: role,
                phone2: "",
                wapphone: "",
                address: "",
            };

            const response = await requesttoBackend('POST', 'usertriumph/', data);

            if (!response) {
                alert("Échec, vérifiez votre connexion ou essayez plus tard.");

                loading.setAttribute("onclick", "CreationCompte()");
            } else if (response.token) {
                console.log(response.token);
                sessionStorage.setItem('triumph', response.token);
                window.location.href = "/dashboard";
            } else if (response.ee) {
                alert(`Le ${input_tel} est déjà associé à un compte`);
                loading.setAttribute("onclick", "CreationCompte()");
            }
        } else {
            alert("Les mot de passe ne sont pas conform.");

        }
    } else {
        alert("Renseignez tous.");
    }

};
