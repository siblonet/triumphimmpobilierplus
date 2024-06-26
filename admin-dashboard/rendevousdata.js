const Rendevousdata = async (listing_data) => {
    listing_data.innerHTML = `
    <div class="header--wrapper">
            <div class="header--title">
                <span id="phonedis">Espace Privée</span>
                <h2 id="usernamedis">John Kokar</h2>
            </div>
            <div class="user--info">
                <a class="openar" onclick="openMany()">
                    <div class="spana"></div>
                    <div class="spanb"></div>
                    <div class="spanc"></div>
                </a>
                <div class="search--box">
                    <i class="fa-solid fa-search"></i>
                    <input type="text" placeholder="Recherche" />
                </div>
                <img id="profile" src="${variable_store}" alt="">
            </div>
        </div>
        <div class="card--container" style="margin-top: 20px;">
                <h3 class="main--title" id="datalengthren">Rendez-vous</h3>
                <div class="products-area-wrapper tableView" id="recentes_houes">
                    <div class="products-header">
                            <div class="product-cell image">
                                Désignation
                                <button class="sort-button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512">
                                        <path fill="currentColor"
                                            d="M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z" />
                                    </svg>
                                </button>
                            </div>
                            <div class="product-cell category">Nom
                                <button class="sort-button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512">
                                        <path fill="currentColor"
                                            d="M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z" />
                                    </svg>
                                </button>
                            </div>
                            <div class="product-cell status-cell">Statut
                                <button class="sort-button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512">
                                        <path fill="currentColor"
                                            d="M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z" />
                                    </svg>
                                </button>
                            </div>
                          
                            <div class="product-cell stock">Téléphone
                                <button class="sort-button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512">
                                        <path fill="currentColor"
                                            d="M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z" />
                                    </svg>
                                </button>
                            </div>
                            <div class="product-cell price">Actions
                                <button class="sort-button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512">
                                        <path fill="currentColor"
                                            d="M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
            
                `;

    /*const houses = await requesttoBackend("GET", 'usertriumph');

    const recentes_houes = document.getElementById('recentes_houes');
    document.getElementById('datalengthren').innerText = `(${houses.length}) Rendez-vous`;

    houses.forEach((house, index) => {
        const hous_html = `
                                <div class="products-row" href="details_view?ov=${house._id}">
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
                                        <img src="${house.profile}"
                                            alt="product">
                                            <span>${house.nomcomplet}</span>
                                    </div>
                                    <div class="product-cell category">
                                        <span class="cell-label">
                                            Rôle:
                                        </span>
                                        ${house.service}
                                    </div>
                                    <div class="product-cell status-cell">
                                        <span class="cell-label">Statut:</span>
                                        <span class="status ${house.admin ? 'active' : 'disabled'}">${house.admin ? 'Admin' : 'Client'}</span>
                                    </div>
                                  
                                    <div class="product-cell stock">
                                        <span class="cell-label">Contact:</span>
                                        ${house.phone}
                                    </div>
                                    <div class="product-cell price">
                                        <a class="btn btn-warnin" onclick="">
                                            <i class="far fa-eye-slash"></i>
                                        </a>
                                        <a class="btn btn-success" onclick="">
                                            <i class="fas fa-edit"></i>
                                        </a>
                                        <a class="btn btn-danger" onclick="">
                                            <i class="far fa-trash-alt"></i>
                                        </a>
                                        <a class="btn btn-done" onclick="">
                                            <i class="fa-solid fa-check"></i>
                                        </a>
                                    </div>
                                </div>
                `;

        recentes_houes.innerHTML += hous_html;
    });*/

}





