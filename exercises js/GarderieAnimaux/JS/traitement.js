function btnCalculer_onclick()
{
    var nbrJr,vete,chien,chat,tarif,animal;

    vete = parseInt(document.getElementById("lstVeterinaire").value);
    nbrJr = parseInt(document.getElementById("txtNbreJours").value);
    chien = parseInt(document.getElementById("radChien").value);
    chat = parseInt(document.getElementById("radChat").value);
    if(document.getElementById("radChien").checked == true)
    {
        tarif=21.28*nbrJr;
    }
    else
    {
        tarif=19.49*nbrJr;
    }
    if(document.getElementById("chkServ").checked == true)
    {
        tarif =tarif +5;
    }
    else
    {
        tarif=tarif+0;
    }
console.log("votre tarif pour la garderie est de:"+tarif);
}
