function btnCalculer_onclick()
{
    var TotKm,MoyKmMois;

    MoyKmMois=parseInt(document.getElementById("txtKm").value);
    TotKm= MoyKmMois*60;
    console.log("votre Km total pour 5 ans est:"+TotKm);
}