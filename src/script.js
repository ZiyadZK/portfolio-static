// TOMBOL TOMBOL MENU EDUCATIONS
function showEducations(edu){
    var pageSMP = document.getElementById('smp');
    var pageSMK = document.getElementById('smk');
    var pageUNIV = document.getElementById('univ')
    if(edu == 'smp'){
        pageSMP.style.display = 'flex';
        pageSMK.style.display = 'none';
        pageUNIV.style.display = 'none';
    }else if(edu == 'smk'){
        pageSMP.style.display = 'none';
        pageSMK.style.display = 'flex';
        pageUNIV.style.display = 'none';
    }else if(edu == 'univ'){
        pageSMP.style.display = 'none';
        pageSMK.style.display = 'none';
        pageUNIV.style.display = 'flex';
    }
}