function btnCalculer_onclick()
{
    var nbrJr,vete,chien,chat,tarif,animal,rabais,serT,nbHeure,tauxH;

    vete = parseInt(document.getElementById("lstVeterinaire").check);
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
        case "Audrey Bouchard":
            tauxH=25;
            break;
    }


    rabais=tarif-(tarif*rabais/100);
    console.log("votre tarif pour la garderie est de:"+tarif);
    console.log("votre prix avec le rabais est:"+rabais);
    console.log("le veterinaire a un taux horaire de:"+tauxH);
}





