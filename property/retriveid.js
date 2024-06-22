function getUrlParameter(ov) {
    ov = ov.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');

    let regov = new RegExp('[\\?&]' + ov + '=([^&#]*)');
    let resov = regov.exec(location.search);

    return resov === null ? null : decodeURIComponent(resov[1].replace(/\+/g, ' '));
};

const retriva = getUrlParameter('ov');

if (!retriva || retriva.length < 5) {
    window.location.href = "/"
} else {
    populateReal(retriva);
    /*document.getElementById('ido').value = retriva;*/
}
