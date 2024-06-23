
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

async function populateReal(hous_id) {
    const house_det = await GetHouseByID(hous_id);

    categoryid.innerText = house_det.categorie;
    typeid.innerText = house_det.type+" "+house_det.address;
    priceid.innerText = house_det.prix+" F";
    priceida.innerText = house_det.prix+" F";
    desciptionid.innerText = house_det.description;



    user_rola.innerText = house_det.person.service;
    user_nome.innerText = house_det.person.nomcomplet;
    user_adress.innerText = 'Rue I-165, Riviera Bonoumin, Cocody';

    user_tel_office.href = `tel:${house_det.person.phone}`;
    user_tel_mobile.href = `tel:${house_det.person.phone2}`;
    user_tel_wp.href = `tel:${house_det.person.wapphone}`;
   
    user_tel_office.innerText = `+225${house_det.person.phone}`;
    user_tel_mobile.innerText = `+225${house_det.person.phone2}`;
    user_tel_wp.innerText = `+225${house_det.person.wapphone}`;

    owner_profile_pic.src = house_det.person.profile;


    iamge_tag_id_a1.href = '';
    iamge_tag_id_a2.href = '';
    iamge_tag_id_a3.href = '';
    iamge_tag_id_a4.href = '';
    iamge_tag_id_a5.href = '';

    iamge_tag_id_1.src = '';
    iamge_tag_id_2.src = '';
    iamge_tag_id_3.src = '';
    iamge_tag_id_4.src = '';
    iamge_tag_id_5.src = '';


    image_tag_plan1.src = '';
    image_tag_plan2.src = '';
}