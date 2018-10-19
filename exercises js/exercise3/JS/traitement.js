function btnCalculer_onclick()
{
    var ArgentCan,TauxChangeEuro,Euro;

    ArgentCan=parseFloat(document.getElementById("txtEuro").value);
    TauxChangeEuro=parseFloat(document.getElementById("txtChange").value);
    Euro=ArgentCan*TauxChangeEuro;
    console.log("votre total en Euro est:"+Euro);

}