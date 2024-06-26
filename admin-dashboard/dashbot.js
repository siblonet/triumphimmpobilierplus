const Dashbot = async () => {
    const recentes_houes = document.getElementById('recentes_houes');
    const houses = await GetAllHouses();

    let totalPrice = 0; // Initialize to 1 so that the first multiplication works
    for (const prix of houses) {
        totalPrice += prix.prix;
    };

    document.getElementById('amount_value_louer').innerText = `${(totalPrice / 1000).toFixed(3)} F`;
    document.getElementById('card_detail_louer').innerText = `(${houses.length}) maison à louer`;

    /*document.getElementById('card_detail_louer').innerText = `(${houses.length})`;
    document.getElementById('card_detail_louer').innerText = `(${houses.length})`;
    document.getElementById('card_detail_louer').innerText = `(${houses.length})`;*/


    houses.forEach((house, index) => {
        const hous_html = `
                    <a class="products-row" href="details_view?ov=${house._id}">
                        <button class="cell-more-button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                class="feather feather-more-vertical">
                                <circle cx="12" cy="12" r="1" />
                                <circle cx="12" cy="5" r="1" />
                                <circle cx="12" cy="19" r="1" />
                            </svg>
                        </button>
                        <div class="product-cell image">
                            <img src="${house.image[0].ima}"
                                alt="product">
                                <span>${house.type}</span>
                        </div>
                        <div class="product-cell category">
                            <span class="cell-label">
                                Category:
                            </span>
                            ${house.categorie}
                        </div>
                        <div class="product-cell status-cell">
                            <span class="cell-label">Statut:</span>
                            <span class="status ${house.availability ? 'active' : 'disabled'}">${house.availability ? 'Actif' : 'Inactif'}</span>
                        </div>
                        <div class="product-cell sales"><span class="cell-label">Auteur:</span>${house.person.nomcomplet}</div>
                        <div class="product-cell stock"><span class="cell-label">Contact:</span>${house.person.phone}</div>
                        <div class="product-cell price"><span class="cell-label">Prix:</span>${(house.prix / 1000).toFixed(3)} F</div>
                    </a>
    `;

        recentes_houes.innerHTML += hous_html;
    });
}



function Logged_Checker() {
    const token = sessionStorage.getItem('triumph');

    if (token) {
        const splo = token.split("°");
        const user_id = thisiswhat(`${splo[0]}`);
        const username = thisiswhat(`${splo[1]}`);
        const phonedis = thisiswhat(`${splo[2]}`);
        document.getElementById('usernamedis').innerText = username;
        document.getElementById('phonedis').innerText = phonedis;
        Dashbot()
    } else {
        window.location.href = "/"
    }
}

Logged_Checker();


const Navigator_Shows = async (who) => {
  /*  const listing_data = document.getElementById("listing-data");
    if (who === "home") {
        Homedata(listing_data)
    } else if (who === "Users") {
        Userdata(listing_data)

    } else if (who === "location") {
        Locationdata(listing_data)
    } else if (who === "vente") {
        Ventedata(listing_data)
    } else if (who === "rendevous") {
        Rendevousdata(listing_data)
    } else {

    }*/

}

//Navigator_Shows("home");

function Disconnexion() {
    var result = window.confirm("Voulez vous vraiment vous déconnectez?");
    if (result) {
        sessionStorage.clear();
        window.location.href = "/"
    }
}