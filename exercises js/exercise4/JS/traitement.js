function btnCalculer_onclick()
{
    var Dest,Dist,Conso,Cout;

    Dest=document.getElementById("txtDest").value;
    Dist=parseInt(document.getElementById("txtDist").value);
    Conso=parseFloat(document.getElementById("txtConso").value);
    Cout=Dist/100 *Conso*1.25;
    console.log("votre destination est:"  + Dest +  "votre distance est:" +Dist +"votre consommation dessence est:"+Conso
        + "le prix de litre dessence est en se moment de 1.25" + " Donc votre cout totale du deplacement est de:"+Cout);
}