$(document).ready(function(){
    $('.data').click(function(){
        let isi = $(this).text();
        let tid = $(this).prop('id');
        let rid = tid.split('_');
        let id_my = rid[1];
        let mhs = $('#mhs_'+id_my).text();

        if(isi=='Hapus'){
            let konfirmasi = confirm(`Sudah yakin di hapus ${mhs}?`);
            if(!konfirmasi) return;

            $('#my_'+id_my).fadeOut();
        }else{
            alert("Anda mengklik kolom yang berisi : " + $(this).html() + "!");
        }
    })
})