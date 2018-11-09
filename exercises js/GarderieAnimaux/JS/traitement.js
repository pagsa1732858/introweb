function btnCalculer_onclick()
{
    var nbrJr,vete,tarif,rabais,serT,nbHeure,tauxH;

    vete = document.getElementById("lstVeterinaire").value;
    nbrJr = parseInt(document.getElementById("txtNbreJours").value);
    nbHeure = parseInt(document.getElementById("txtHeure").value);

    if(document.getElementById("radChien").checked == true)
    {
        tarif=21.28;
        document.getElementById("imgChien").src= "img/Chien.jpg";
    }
    else
    {
        tarif=19.49;
        document.getElementById("imgChat").src= "img/Chat.jpg";
    }
    tarif=tarif*nbrJr;

    if(document.getElementById("chkServ").checked == true)
    {
        serT =5;
    }
    else
    {
        serT=+0;
    }
    tarif =tarif +serT;
    if(nbrJr>=1 && nbrJr<5)
    {
        rabais=0;
    }
    else
    {
        if(nbrJr>=5 && nbrJr<10 )
        {
        rabais=5;
        }
        else
        {
            if(nbrJr>=10 && nbrJr<30)
            {
                rabais=10
            }
            else
            {
               rabais=15
            }
        }
    }
    switch(vete)
    {
        case "Audrey Bouchard" :
            tauxH=25;
            break;
        case "Stéphane Tremblay" :
            tauxH=30;
            break;
        case "Maxime Simard" :
            tauxH=35;
            break;
        case "Mélissa Caron" :
            tauxH=40;
            break;
    }

 tauxH = tauxH*nbHeure;
    rabais=tarif-(tarif*rabais/100);


    document.getElementById("lblMessage").innerHTML ="votre tarif pour la garderie est de:"+tarif+" votre prix avec le rabais est:"+rabais+ " le prix pour les heures du veterinaire est:"+tauxH;



}





