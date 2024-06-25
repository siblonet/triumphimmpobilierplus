
const iamge_tag_id_a1 = document.getElementById('iamge_tag_id_a1');
const iamge_tag_id_a2 = document.getElementById('iamge_tag_id_a2');
const iamge_tag_id_a3 = document.getElementById('iamge_tag_id_a3');
const iamge_tag_id_a4 = document.getElementById('iamge_tag_id_a4');
const iamge_tag_id_a5 = document.getElementById('iamge_tag_id_a5');


const iamge_tag_id_1 = document.getElementById('iamge_tag_id_1');
const iamge_tag_id_2 = document.getElementById('iamge_tag_id_2');
const iamge_tag_id_3 = document.getElementById('iamge_tag_id_3');
const iamge_tag_id_4 = document.getElementById('iamge_tag_id_4');
const iamge_tag_id_5 = document.getElementById('iamge_tag_id_5');

const image_tag_plan1 = document.getElementById('image_tag_plan1');
const image_tag_plan2 = document.getElementById('image_tag_plan2');


const owner_profile_pic = document.getElementById('owner_profile_pic');

const user_rola = document.getElementById('user_rola');
const user_nome = document.getElementById('user_nome');
const user_adress = document.getElementById('user_adress');

const user_tel_office = document.getElementById('user_tel_office');
const user_tel_mobile = document.getElementById('user_tel_mobile');
const user_tel_wp = document.getElementById('user_tel_wp');



const categoryid = document.getElementById('categoryid');
const typeid = document.getElementById('typeid');
const priceid = document.getElementById('priceid');
const priceida = document.getElementById('priceida');
const desciptionid = document.getElementById('desciptionid');


//detail de la proprieter
const tailtage = document.getElementById('tailtage');
const Ameublementtage = document.getElementById('Ameublementtage');
const Chambrestage = document.getElementById('Chambrestage');
const hauteursousplafondtage = document.getElementById('hauteursousplafondtage');
const saledebaintage = document.getElementById('saledebaintage');
const anneedeconstructiontage = document.getElementById('anneedeconstructiontage');
const etagetage = document.getElementById('etagetage');
const renovationtage = document.getElementById('renovationtage');
const expacesupplementairetage = document.getElementById('expacesupplementairetage');


//Utilité de la propriété
const chauffagetage = document.getElementById('chauffagetage');
const interphonetage = document.getElementById('interphonetage');
const climatisationtage = document.getElementById('climatisationtage');
const typedefenetretage = document.getElementById('typedefenetretage');
const chemineetage = document.getElementById('chemineetage');
const cabletelevisiontage = document.getElementById('cabletelevisiontage');
const ascenseurtage = document.getElementById('ascenseurtage');
const wifitage = document.getElementById('wifitage');
const ventilationtage = document.getElementById('ventilationtage');



//Caractéristiques Extérieures
const garagetage = document.getElementById('garagetage');
const parkingtage = document.getElementById('parkingtage');
const jardintage = document.getElementById('jardintage');
const acceshandicapeetage = document.getElementById('acceshandicapeetage');
const piscinetage = document.getElementById('piscinetage');
const securitytage = document.getElementById('securitytage');
const animauxacceptedtage = document.getElementById('animauxacceptedtage');
const cloturetage = document.getElementById('cloturetage');


/*/Plans d'étage
const cloturetage = document.getElementById('cloturetage');
const cloturetage = document.getElementById('cloturetage');
const cloturetage = document.getElementById('cloturetage');
*/

//Qu'y a-t-il à proximité ?
const ecoletage = document.getElementById('ecoletage');
const hospitaltage = document.getElementById('hospitaltage');
const Phamacytage = document.getElementById('Phamacytage');
const universitytage = document.getElementById('universitytage');
const metrottage = document.getElementById('metrottage');
const Supermarchtage = document.getElementById('Supermarchtage');
const gymwell = document.getElementById('gymwell');
const market = document.getElementById('market');
const riviere = document.getElementById('riviere');




async function populateReal(hous_id) {
    const house_det = await GetHouseByID(hous_id);

    categoryid.innerText = house_det.categorie;
    typeid.innerText = house_det.type + " " + house_det.address;
    priceid.innerText = house_det.prix + " F";
    priceida.innerText = house_det.prix + " F";
    desciptionid.innerText = house_det.description;


    //detail de la proprieter
    tailtage.innerText = house_det.Property_details.meusure;
    Ameublementtage.innerText = house_det.Property_details.Furnishing;
    Chambrestage.innerText = house_det.Property_details.Bedrooms;
    hauteursousplafondtage.innerText = house_det.Property_details.CeilingHeight;
    saledebaintage.innerText = house_det.Property_details.Bathrooms;
    anneedeconstructiontage.innerText = house_det.Property_details.ConstructionYear;
    etagetage.innerText = house_det.Property_details.Floor;
    renovationtage.innerText = house_det.Property_details.Renovation;
    expacesupplementairetage.innerText = house_det.Property_details.Additional_Space;


    //Utilité de la propriété
    chauffagetage.innerText = house_det.Property_utility.Heating;
    interphonetage.innerText = house_det.Property_utility.Intercom;
    climatisationtage.innerText = house_det.Property_utility.Air_Condition;
    typedefenetretage.innerText = house_det.Property_utility.WindowType;
    chemineetage.innerText = house_det.Property_utility.Fireplace;
    cabletelevisiontage.innerText = house_det.Property_utility.CableTV;
    ascenseurtage.innerText = house_det.Property_utility.Elevator;
    wifitage.innerText = house_det.Property_utility.WiFi;
    ventilationtage.innerText = house_det.Property_utility.Ventilation;




    //Caractéristiques Extérieures
    garagetage.innerText = house_det.Outdoor_features.Garage;
    parkingtage.innerText = house_det.Outdoor_features.Parking;
    jardintage.innerText = house_det.Outdoor_features.Garden;
    acceshandicapeetage.innerText = house_det.Outdoor_features.DisabledAccess
    piscinetage.innerText = house_det.Outdoor_features.SwimmingPool;
    cloturetage.innerText = house_det.Outdoor_features.Fence;
    securitytage.innerText = house_det.Outdoor_features.Security;
    animauxacceptedtage.innerText = house_det.Outdoor_features.Pet_Friendly;



    //Qu'y a-t-il à proximité ?
    ecoletage.innerText = house_det.What_nearby.School;
    hospitaltage.innerText = house_det.What_nearby.Hospital;
    Phamacytage.innerText = house_det.What_nearby.Phamacytage;
    universitytage.innerText = house_det.What_nearby.University;
    metrottage.innerText = house_det.What_nearby.Metro_station;
    Supermarchtage.innerText = house_det.What_nearby.Grocery_center;
    gymwell.innerText = house_det.What_nearby.Gym_wellness;
    market.innerText = house_det.What_nearby.Market;
    riviere.innerText = house_det.What_nearby.River;


    user_rola.innerText = house_det.person.service;
    user_nome.innerText = house_det.person.nomcomplet;
    user_adress.innerText = house_det.person.address ? house_det.person.address : 'Rue I-165, Riviera Bonoumin, Cocody';

    user_tel_office.href = `tel:${house_det.person.phone}`;
    user_tel_mobile.href = `tel:${house_det.person.phone2}`;
    user_tel_wp.href = `tel:${house_det.person.wapphone}`;

    user_tel_office.innerText = `+225${house_det.person.phone}`;
    user_tel_mobile.innerText = `+225${house_det.person.phone2}`;
    user_tel_wp.innerText = `+225${house_det.person.wapphone}`;

    owner_profile_pic.src = house_det.person.profile;


    iamge_tag_id_a1.href = house_det.image[0].ima;
    iamge_tag_id_a2.href = house_det.image[1].ima;
    iamge_tag_id_a3.href = house_det.image[2].ima;
    iamge_tag_id_a4.href = house_det.image[3].ima;
    iamge_tag_id_a5.href = house_det.image[4].ima;

    iamge_tag_id_1.src = house_det.image[0].ima;
    iamge_tag_id_2.src = house_det.image[1].ima;
    iamge_tag_id_3.src = house_det.image[2].ima;
    iamge_tag_id_4.src = house_det.image[3].ima;
    iamge_tag_id_5.src = house_det.image[4].ima;


    image_tag_plan1.src = '';
    image_tag_plan2.src = '';
}