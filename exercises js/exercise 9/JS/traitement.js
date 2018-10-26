function btnCalculer_onclick()
{
    var nbrEtu, nbr65, nbrAutre, rabais, total;

    nbrEtu = parseInt(document.getElementById("txtetu").value);
    nbr65 = parseInt(document.getElementById("txtnbr65").value);
    nbrAutre = parseInt(document.getElementById("txtnbrAutre").value);
    total = ((nbrEtu * 12) + (nbr65 * 15) + (nbrAutre * 20));
    if (nbrEtu + nbr65 + nbrAutre >= 5) {
        total = total - ((total * 10) / 100);
    }


    console.log("votre prix total pour les billets de spectacles est:" + total);

}