$(document).ready(function(){
    $(".menu").click(function(){
        let id = $(this).prop('id');
        let split = id.split('_');
        let id_opsi = split[1];
        
        $(".menu").removeClass('teh');
        $("#mmd_"+id_opsi).addClass('teh');
        
        $(".konten_").slideUp();
        
        $("#mda_1").slideUp();
        $("#mda_2").slideUp();
        $("#mda_3").slideUp();
        $("#mda_"+id_opsi).slideToggle();
    });
});