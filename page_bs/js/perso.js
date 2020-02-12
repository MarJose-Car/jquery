$(function(){
    $('aside a').click(function(event){
        // alert('clic');
        //j'annule le clic sur le lien
        event.preventDefault();
        console.log($(this).attr('href'));
        var monHref = $(this).attr('href');
        $('figure img').attr("src",monHref);

        //Récupérer dans une variable le Alt des images vignettes puis changer le contenu de ficaption avec cette variable

        console.log($(this).attr('title'));

        var monTitle = $(this).attr('title');
        $('figcaption h3').html(monTitle);

    });

});