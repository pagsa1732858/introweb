function btnCalculer_onclick()
{
    var PoidsLivre,Kg;

    PoidsLivre=parseFloat(document.getElementById("txtPoids").value);
    Kg= PoidsLivre/2.2;
    console.log("votre poids en kilogramme sera de:"+Kg);

}