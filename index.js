/*const modala_compte = document.querySelector('.modala_compte');
const modala_wrapa_compte = document.querySelector('.modala-wrapa_compte');

const modala_recrutement_form = document.querySelector('.modala_recrutement_form');
const modala_wrapa_recrutement_form = document.querySelector('.modala_wrapa_recrutement_form');

const modala_job_open_view = document.querySelector('.modala_job_open_view');
const modala_wrapa_job_open_view = document.querySelector('.modala_wrapa_job_open_view');
const job_display = document.getElementById('job_display');*/


const house_properties = {
    _id: "4970kh567rqsax",
    person: {
        fullname: 'John Kokar',
        ima: "ddjks",
        phone1: "",
        phone2: "",
        wapphone: "",
        mail: "",
        role: "owner",
        address: "560 3rd Ave, New York, NY 10016, USA"
    },
    image: [{}, {}, {}, {}, {}],
    categorie: "En vente",
    type: "Villas",
    ville: "Abidjan",
    address: "Riviera Golf",
    prix: 7200000,
    meusure: "190",
    description: "190",
    Property_details:{

        meusure: "190",
        Bedrooms: 4,
        Bathrooms: 2,
        Floor: "Ground",
        Additional_Space: "Basement",
        Furnishing: "",
        CeilingHeight: "",
        ConstructionYear: "2002",
        Renovation: "2000"
    },
    Outdoor_features: {
        Garage: "Yes",
        Garden: "50m2",
        SwimmingPool: "3x5x1.5m",
        Security: "3 Cameras",
        Parking: "Yes",
        DisabledAccess: "Ramp",
        Fence: "Wood fence",
        Pet_Friendly: "Yes"

    },
    Floorplans: [{}, {}, {}, {}, {}],


    Property_utility: {
        Heating: "Natural Gas",
        Air_Condition: "Yes",
        Fireplace: "",
        Elevator: "",
        Ventilation: "",
        Intercom: "",
        WindowType: "",
        CableTV: "",
        WiFi: ""
    },

    What_nearby: {
        School: "1.2km",
        Hospital: "1.5km",
        Phamacy: "1.5km",
        University: "3km",
        Metro_station: "0.1km",
        Grocery_center: "0.5km",
        Gym_wellness: "0.8km",
        Market: "1.7km",
        River: "0.2km",

    }
}


const DisplayHouses = async () => {
    /*const job_content = await GetAllJob();
        const connected_id = sessionStorage.getItem('_id');
    */
    const houses_content = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

    const houses_rendering = document.getElementById('houses_rendering');
    houses_rendering.innerHTML = "";

    houses_content.forEach((house, index) => {
        const hous_html = `
        <article
        class="qodef-e qodef-grid-item qodef-item--custom post-2460 property type-property status-publish has-post-thumbnail hentry property-type-sell property-category-villas property-location-brooklyn property-tag-swimming-pool"
        data-id="2460">
        <div class="qodef-e-inner">
            <div class="qodef-e-image-holder">

                <div class="qodef-e-media-slider qodef-swiper-container"
                    data-options="{&quot;slidesPerView&quot;:1,&quot;spaceBetween&quot;:5,&quot;loop&quot;:true,&quot;autoplay&quot;:false}">
                    <div class="swiper-wrapper">

                        <a style="width: 460px; height: 300px;"
                            class="swiper-slide"
                            itemprop="url"
                            href="property/details_view/index.html">

                            <img style="height: 100%; width: 100%;"
                                loading="lazy"
                                decoding="async"
                                src="wp-content/uploads/2023/03/modern-family-house-03-841x533.jpg"
                                alt="w"
                                data-ratio="1.5333333333333" />
                        </a>

                        <a style="width: 460px; height: 300px;"
                            class="swiper-slide"
                            itemprop="url"
                            href="property/details_view/index.html">

                            <img style="height: 100%; width: 100%;"
                                loading="lazy"
                                decoding="async"
                                src="wp-content/uploads/2023/03/marble-house-01.jpg"
                                alt="w"
                                data-ratio="1.5333333333333" />
                        </a>

                        <a style="width: 460px; height: 300px;"
                            class="swiper-slide"
                            itemprop="url"
                            href="property/details_view/index.html">
                            <img style="height: 100%; width: 100%;"
                                loading="lazy"
                                decoding="async"
                                src="wp-content/uploads/2023/03/main-home-property.jpg"
                                alt="w"
                                data-ratio="1.5333333333333" />
                        </a>

                    </div>
                    <div class="swiper-pagination"></div>
                </div>
                <div class="qodef-e-info-item qodef--type">
                    <a itemprop="url"
                        class="qodef-e-info-item-link qodef--property-type"
                        href="property/details_view/index.html">
                        <span
                            class="qodef-e-info-item-text">
                            En vente</span>
                    </a>
                </div>

                <div class="qodef-e-actions">
                    <div class="qodef-wishlist qodef-m">
                        <button type="button"
                            class="qodef-m-action-button qodef-property-spinner qodef--allowed-remove qodef-m-link "
                            data-id="2460"
                            data-title="Ajouter à la liste de souhaits"
                            data-added-title="Ajouter à la liste de souhaits">
                            <span class="qodef-m-icon">
                                <svg width="17" height="17"
                                    viewBox="0 0 17 17">
                                    <g fill="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <path
                                            class="qodef-m-fav-inner"
                                            fill="none"
                                            d="M7.571 2.323a1 1 0 0 1 1.857 0l1.223 3.06a1 1 0 0 0 .841.625l3.232.285a1 1 0 0 1 .584 1.737l-2.527 2.293a1 1 0 0 0-.3.958l.749 3.36a1 1 0 0 1-1.516 1.059L9.037 14a1 1 0 0 0-1.074 0l-2.677 1.7a1 1 0 0 1-1.513-1.06l.749-3.36a1 1 0 0 0-.3-.958l-2.53-2.293a1 1 0 0 1 .584-1.737l3.232-.285a1 1 0 0 0 .841-.625Z" />
                                        <path
                                            class="qodef-m-fav-outer"
                                            d="M8.50000095 2.49375057c-.08987045 0-.15235042.04231072-.18570995.12575054L7.0910511 5.67916107c-.25337982.63377-.83314037 1.06476975-1.51305008 1.12481976l-3.23159027.28536033c-.10766983.00951004-.15294933.07890988-.17196941.1354599-.01902008.05655003-.02488995.13922024.05515003.2118597l2.52661991 2.29319955c.47799969.43382072.68763924 1.0947113.54710007 1.72475051l-.74938011 3.35963059c-.01449013.06495953-.0037899.1169796.03366947.16371918.04036999.05037021.10447979.08292007.16331005.08292007.03472042 0 .06928062-.01126003.10564041-.03440952l2.67663002-1.70440006c.28940964-.18428994.6237297-.28170014.96681976-.28170014s.67741013.0974102.96681977.28170014l2.67663002 1.70440006c.03636074.02314949.07091999.03440952.1056404.03440952.05881024 0 .12290002-.03254986.16327954-.0829401.04924011-.06142998.04281044-.12284947.03370094-.16372013l-.7493801-3.35957909c-.14055062-.63004112.0690794-1.2909298.54707908-1.72477054l2.5266304-2.29319954c.08004952-.07264996.07417965-.15532017.05516052-.2118702-.01902008-.05655002-.06430053-.12594986-.17197036-.1354599L11.4220209 6.8039713c-.6799097-.06002998-1.25969028-.4910307-1.51306057-1.12481022L8.68571091 2.61951065c-.03335953-.08344936-.09585-.12576008-.18570996-.12576008m-.00000381-.79999923c.380476 0 .7609539.20958995.92854404.62876987l1.22324944 3.05965996c.13997078.35011005.46498012.59173012.84057999.62488937l3.23159027.28537083c.86851024.07668972 1.2297306 1.1506195.58411026 1.73660946l-2.52663994 2.29321003c-.26615048.24155998-.3821907.60737991-.30393028.95818996l.7493801 3.3596096c.19408036.87005044-.76120948 1.54002-1.51313018 1.06121064l-2.67663002-1.70440007c-.32768059-.20866012-.74655914-.20866012-1.07423973 0l-2.67663002 1.70440007c-.75192166.47880935-1.70720959-.1911602-1.51313019-1.06121064l.74938011-3.3596096c.07824993-.35081005-.0377798-.71662998-.30393982-.95818996l-2.5266304-2.29321003c-.6456194-.58597946-.28439999-1.65991974.58411026-1.73660946l3.23159027-.28536034c.37559986-.03316974.7006092-.2747898.84057999-.62489986L7.57146072 2.3225212c.16758538-.41917992.54806042-.62876987.92853642-.62876987Z" />
                                    </g>
                                </svg>
                            </span>
                            <span
                                class="qodef-m-tooltip">Ajouter
                                à la liste de
                                souhaits</span>
                            <span class="qodef-m-spinner">
                                <svg width="20" height="20"
                                    viewBox="0 0 50 50">
                                    <circle cx="25" cy="25"
                                        r="20" fill="none"
                                        stroke="currentColor"
                                        stroke-width="5"
                                        stroke-linecap="round" />
                                </svg>
                            </span>
                        </button>
                        <div class="qodef-m-response"></div>
                    </div>
                    <button type="button"
                        class="qodef-m-action-button qodef-property-spinner qodef--compare "
                        data-property-id="2460"
                        data-title="Ajouter à la comparaison"
                        data-added-title="Ajouter à la comparaison">
                        <span class="qodef-m-icon">
                            <svg width="13" height="13"
                                viewBox="0 0 13 13">
                                <path fill="none"
                                    stroke="currentColor"
                                    d="M6.5 0v13M0 6.5h13" />
                            </svg>
                        </span>
                        <span class="qodef-m-tooltip">
                            Ajouter à la comparaison </span>
                        <span class="qodef-m-spinner">
                            <svg width="20" height="20"
                                viewBox="0 0 50 50">
                                <circle cx="25" cy="25"
                                    r="20" fill="none"
                                    stroke="currentColor"
                                    stroke-width="5"
                                    stroke-linecap="round" />
                            </svg>
                        </span>
                    </button>
                </div>
                <div class="qodef-e-author">
                    <div class="qodef-e-author-image">
                        <a itemprop="url"
                            href="property/details_view/index.html">
                            <img loading="lazy"
                                decoding="async"
                                src="https://storage.googleapis.com/seeme-7a462.appspot.com/4f780184-c542-4e31-b69a-51092516ab8fwe.png"
                                alt="b" width="50"
                                height="50"
                                data-ratio="1" />
                        </a>
                    </div>
                    <a itemprop="url"
                        class="qodef-e-author-name"
                        href="property/details_view/index.html">
                        John Kokar
                    </a>
                </div>
            </div>


            <div class="qodef-e-content">
                <div class="qodef-e-top-info">
                    <div class="qodef-e-info">
                        <svg width="10" height="14"
                            viewBox="0 0 10 14">
                            <g
                                transform="translate(-176.732 -1468.625)">
                                <path
                                    d="M181.77841914 1469.42474238c-1.18292999 0-2.25112009.39579964-3.00782013 1.11448002-.81029987.76959991-1.23859977 1.87357998-1.23859977 3.19257974 0 .6967001.32018947 2.02022028 1.84558963 4.36906004.85201931 1.31195736 1.78410721 2.49109268 2.39263678 3.23786545.59846926-.75298881 1.51947641-1.94614792 2.35712338-3.26402569 1.49156045-2.34667969 1.80464983-3.65694952 1.80464983-4.3428998 0-1.3133502-.41541005-2.41482973-1.20132971-3.18536997-.73777008-.72332954-1.78623009-1.1216898-2.95225-1.1216898m0-.80000018c2.76142024 0 4.9535799 1.89883995 4.9535799 5.10705995 0 3.15320587-4.87000561 8.6986804-4.95362902 8.8879714-.08729982-.18853569-5.04637098-5.6929469-5.04637098-8.8879714 0-3.25097036 2.28498983-5.10705995 5.0464201-5.10705995Zm-.00004912 13.99503135c.00305176.00659275-.00292444.0066185 0 0Z"
                                    fill="currentColor" />
                                <circle cx="1.5" cy="1.5"
                                    r="1.5"
                                    transform="translate(180.232 1471.705)"
                                    fill="currentColor" />
                            </g>
                        </svg>
                        <div
                            class="qodef-e-info-item qodef--category">
                            <a itemprop="url"
                                class="qodef-e-info-item-link qodef--property-category"
                                href="property/details_view/index.html">
                                <span
                                    class="qodef-e-info-item-text">Villas</span>
                            </a>
                        </div>
                        <span
                            class="qodef-info-separator-end"></span>
                        <div
                            class="qodef-e-info-item qodef--location">
                            <a itemprop="url"
                                class="qodef-e-info-item-link qodef--property-location"
                                href="property/details_view/index.html">
                                <span
                                    class="qodef-e-info-item-text">Abidjan</span>
                            </a>
                        </div>
                        <span
                            class="qodef-info-separator-end"></span>
                    </div>
                </div>
                <h4 itemprop="name"
                    class="qodef-e-title entry-title">
                    <a itemprop="url"
                        class="qodef-e-title-link"
                        href="property/details_view/index.html">
                        Riviera Golf
                    </a>
                </h4>
                <p itemprop="description"
                    class="qodef-e-excerpt">Très belle
                    maison avec une très belle vue, calme et
                    luxueuse, et une sécurité totale.</p>
                <div class="qodef-e-bottom-info">
                    <div class="qodef-e-price">
                        <span
                            class="qodef-e-price-amount qodef-h5">
                            7.900.000 F</span>
                    </div>
                    <div
                        class="qodef-e-info-item qodef--size">
                        <span
                            class="qodef-e-info-item-icon">
                            <svg class="qodef-ei-svg-icon qodef--size"
                                width="18.214"
                                height="19.601"
                                viewBox="0 0 18.214 19.601">
                                <path
                                    d="M7.87.151h10.013a.181.181 0 0 1 .181.179v2.4a.181.181 0 1 1-.362 0V.511H8.051v4.224a.181.181 0 0 1-.181.181H.511v14.173h17.191V6.296h-6.421v2.139a.181.181 0 1 1-.362 0v-2.32a.181.181 0 0 1 .181-.181h6.783a.181.181 0 0 1 .181.181V19.27a.181.181 0 0 1-.181.181H.331a.181.181 0 0 1-.181-.181V4.735a.181.181 0 0 1 .181-.181h7.358V.33A.181.181 0 0 1 7.87.151Z"
                                    fill="currentColor"
                                    stroke="currentColor"
                                    stroke-width=".3" />
                                <path
                                    d="M11.1 11.249h2.158a.181.181 0 0 1 0 .362h-1.977v1.669a.181.181 0 0 1-.181.181H.33a.181.181 0 0 1 0-.362h10.589v-1.67a.181.181 0 0 1 .181-.18Z"
                                    fill="currentColor"
                                    stroke="currentColor"
                                    stroke-width=".3" />
                                <path
                                    d="M16.121 11.249h1.762a.181.181 0 0 1 0 .362h-1.762a.181.181 0 0 1 0-.362Z"
                                    fill="currentColor"
                                    stroke="currentColor"
                                    stroke-width=".3" />
                                <path
                                    d="M11.1 15.83a.181.181 0 0 1 .181.181v3.259a.181.181 0 1 1-.362 0v-3.259a.181.181 0 0 1 .181-.181Z"
                                    fill="currentColor"
                                    stroke="currentColor"
                                    stroke-width=".3" />
                            </svg>
                        </span>
                        <span
                            class="qodef-e-info-item-text">
                            290 <span
                                class="qodef--measure-unit">m<sup>2</sup></span>
                        </span>
                    </div>
                    
                </div>
            </div>
        </div>
    </article>
                      
                        `;

        houses_rendering.innerHTML += hous_html;

    });
}

DisplayHouses();








`
<div class="request">
                            <div class="info">
                                <div class="profile-photo">
                                    <img src="./assets/imo/job.png">
                                </div>

                                <div>
                                    <h5>${job.role}</h5>
                                    <p class="text-muted">${job_peop} persone(s) invité</p>
                                </div>
                            </div>
                            ${connected_id === job.recruter ?
        `
                                <div class="action">
                                    <button class="btn btn-primary" onclick="OpenModifieJob('${job._id}')">
                                        Modifier
                                    </button>
                                    <button class="btn"  onclick="DeleteJob(${job._id})">
                                        Annuler
                                    </button>
                                </div>

                            `
        :
        `
                                <div class="action">
                                    <button class="btn btn-primary" onclick="OpenJob('${job._id}')">
                                        Accepter
                                    </button>
                                    <button class="btn" onclick="RejectJob(${job._id})">
                                        Refuser
                                    </button>
                                </div>

                            `
    }
                            
                        </div>
`