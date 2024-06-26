/*const modala_compte = document.querySelector('.modala_compte');
const modala_wrapa_compte = document.querySelector('.modala-wrapa_compte');

const modala_recrutement_form = document.querySelector('.modala_recrutement_form');
const modala_wrapa_recrutement_form = document.querySelector('.modala_wrapa_recrutement_form');

const modala_job_open_view = document.querySelector('.modala_job_open_view');
const modala_wrapa_job_open_view = document.querySelector('.modala_wrapa_job_open_view');
const job_display = document.getElementById('job_display');*/

function openCherche() {
    //const searchbar = document.getElementById('qodef-main-rev-holder');
    const searchbar = document.querySelector('.opencherche')
    //const searchInput = document.getElementById('searchInput');
    searchbar.style.display = 'block';
    searchbar.style.height = '100%';

    /*searchInput.style.display = 'block';
    searchInput.addEventListener('blur', () => {
        searchbar.style.width = '40px';
        searchInput.style.display = 'none';
        searchInput.value = '';
    });*/
}

const Login_Check = () => {
    const token = sessionStorage.getItem('triumph');
    if (token) {
        const toexpacelogi = document.getElementById('toexpacelogi');
        toexpacelogi.href = "user-dashboard/dashboard.html";//dashboard
        toexpacelogi.classList.remove("qodef-login-opener")


        const loginmogile = document.getElementById('loginmogile');
        loginmogile.href = "user-dashboard/dashboard.html";//dashboard UZOHV
        loginmogile.classList.remove("qodef-login-opener")
        const splo = token.split("°");
        const Admin = splo[4];
        console.log(Admin);
        /*if (Admin === "GIFV") {
            document.getElementById('newhome_core_real_estate_property_links-3').style.display = "block";
            document.getElementById('menu-main-menu-3').style.display = "block";
        }*/
    }
}

Login_Check();

async function DisplayHouse() {
    const houses_rendering = document.getElementById('houses_rendering');
    houses_rendering.innerHTML = "";

    await clearHouses();
    const houses = await requesttoBackend("GET", 'triumph');
    await PostHouses(houses);
    houses.forEach((house, index) => {
        const hous_html = `
        <article class="qodef-e qodef-grid-item qodef-item--custom post-2460 property type-property status-publish has-post-thumbnail hentry property-type-sell property-category-villas property-location-brooklyn property-tag-swimming-pool" data-id="2460">
            <div class="qodef-e-inner">
                <div class="qodef-e-image-holder">
                    <div class="qodef-e-media-slider qodef-swiper-container" data-options="{&quot;slidesPerView&quot;:1,&quot;spaceBetween&quot;:5,&quot;loop&quot;:true,&quot;autoplay&quot;:false}">
                        <div class="swiper-wrapper">

                            ${house.image.map((img, i) => `
                            <a style="width: 460px; height: 300px;" class="swiper-slide" itemprop="url" href="details_view?ov=${house._id}">
                                <img style="height: 100%; width: 100%;" loading="lazy" decoding="async" src="${img.ima}" alt="${String.fromCharCode(65 + i)}" data-ratio="1.5333333333333" />
                            </a>`).join('')}

                        </div>
                        <div class="swiper-pagination"></div>
                    </div>
                    <div class="qodef-e-info-item qodef--type">
                        <a itemprop="url" class="qodef-e-info-item-link qodef--property-type" href="details_view?ov=${house._id}">
                            <span class="qodef-e-info-item-text">${house.categorie}</span>
                        </a>
                    </div>

                    <div class="qodef-e-actions">
                        <div class="qodef-wishlist qodef-m">
                            <a href="details_view?ov=${house._id}">
                                Voir Plus
                            </a>
                        </div>
                    </div>
                    <div class="qodef-e-author">
                        <div class="qodef-e-author-image">
                            <a itemprop="url" href="details_view?ov=${house._id}">
                                <img loading="lazy" decoding="async" src="${house.person.profile}" alt="b" width="50" height="50" data-ratio="1" />
                            </a>
                        </div>
                        <a itemprop="url" class="qodef-e-author-name" href="details_view?ov=${house._id}">
                            ${house.person.nomcomplet}
                        </a>
                    </div>
                </div>
                <div class="qodef-e-content">
                    <div class="qodef-e-top-info">
                        <div class="qodef-e-info">
                            <svg width="10" height="14" viewBox="0 0 10 14">
                                <g transform="translate(-176.732 -1468.625)">
                                    <path d="M181.77841914 1469.42474238c-1.18292999 0-2.25112009.39579964-3.00782013 1.11448002-.81029987.76959991-1.23859977 1.87357998-1.23859977 3.19257974 0 .6967001.32018947 2.02022028 1.84558963 4.36906004.85201931 1.31195736 1.78410721 2.49109268 2.39263678 3.23786545.59846926-.75298881 1.51947641-1.94614792 2.35712338-3.26402569 1.49156045-2.34667969 1.80464983-3.65694952 1.80464983-4.3428998 0-1.3133502-.41541005-2.41482973-1.20132971-3.18536997-.73777008-.72332954-1.78623009-1.1216898-2.95225-1.1216898m0-.80000018c2.76142024 0 4.9535799 1.89883995 4.9535799 5.10705995 0 3.15320587-4.87000561 8.6986804-4.95362902 8.8879714-.08729982-.18853569-5.04637098-5.6929469-5.04637098-8.8879714 0-3.25097036 2.28498983-5.10705995 5.0464201-5.10705995Zm-.00004912 13.99503135c.00305176.00659275-.00292444.0066185 0 0Z" fill="currentColor" />
                                    <circle cx="1.5" cy="1.5" r="1.5" transform="translate(180.232 1471.705)" fill="currentColor" />
                                </g>
                            </svg>
                            <div class="qodef-e-info-item qodef--category">
                                <a itemprop="url" class="qodef-e-info-item-link qodef--property-category" href="details_view?ov=${house._id}">
                                    <span class="qodef-e-info-item-text">${house.type}</span>
                                </a>
                            </div>
                            <span class="qodef-info-separator-end"></span>
                            <div class="qodef-e-info-item qodef--location">
                                <a itemprop="url" class="qodef-e-info-item-link qodef--property-location" href="details_view?ov=${house._id}">
                                    <span class="qodef-e-info-item-text">${house.ville}</span>
                                </a>
                            </div>
                            <span class="qodef-info-separator-end"></span>
                        </div>
                    </div>
                    <h4 itemprop="name" class="qodef-e-title entry-title">
                        <a itemprop="url" class="qodef-e-title-link" href="details_view?ov=${house._id}">
                            ${house.address}
                        </a>
                    </h4>
                    <p itemprop="description" class="qodef-e-excerpt">
                        ${house.description}
                    </p>
                    <div class="qodef-e-bottom-info">
                        <div class="qodef-e-price">
                            <span class="qodef-e-price-amount qodef-h5">
                                ${house.prix} F</span>
                        </div>
                        <div class="qodef-e-info-item qodef--size">
                            <span class="qodef-e-info-item-icon">
                                <svg class="qodef-ei-svg-icon qodef--size" width="18.214" height="19.601" viewBox="0 0 18.214 19.601">
                                    <path d="M7.87.151h10.013a.181.181 0 0 1 .181.179v2.4a.181.181 0 1 1-.362 0V.511H8.051v4.224a.181.181 0 0 1-.181.181H.511v14.173h17.191V6.296h-6.421v2.139a.181.181 0 1 1-.362 0v-2.32a.181.181 0 0 1 .181-.181h6.783a.181.181 0 0 1 .181.181V19.27a.181.181 0 0 1-.181.181H.331a.181.181 0 0 1-.181-.181V4.735a.181.181 0 0 1 .181-.181h7.358V.33A.181.181 0 0 1 7.87.151Z" fill="currentColor" stroke="currentColor" stroke-width=".3" />
                                    <path d="M11.1 11.249h2.158a.181.181 0 0 1 0 .362h-1.977v1.669a.181.181 0 0 1-.181.181H.33a.181.181 0 0 1 0-.362h10.589v-1.67a.181.181 0 0 1 .181-.18Z" fill="currentColor" stroke="currentColor" stroke-width=".3" />
                                    <path d="M16.121 11.249h1.762a.181.181 0 0 1 0 .362h-1.762a.181.181 0 0 1 0-.362Z" fill="currentColor" stroke="currentColor" stroke-width=".3" />
                                    <path d="M11.1 15.83a.181.181 0 0 1 .181.181v3.259a.181.181 0 1 1-.362 0v-3.259a.181.181 0 0 1 .181-.181Z" fill="currentColor" stroke="currentColor" stroke-width=".3" />
                                </svg>
                            </span>
                            <span class="qodef-e-info-item-text">${house.meusure}<span class="qodef--measure-unit">m<sup>2</sup></span></span>
                        </div>
                    </div>
                </div>
            </div>
        </article>
        `;

        houses_rendering.innerHTML += hous_html;
    });


};

DisplayHouse()