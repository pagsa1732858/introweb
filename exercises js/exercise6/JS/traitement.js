function btnCalculer_onclick()
{
    var ArgentCan1,ArgentCan5,ArgentCan10,ArgentCan25,Total;

    ArgentCan1=document.getElementById("txtArgentCan1").value;
    ArgentCan5=parseInt(document.getElementById("txtArgentCan5").value);
    ArgentCan10=parseFloat(document.getElementById("txtArgentCan10").value);
    ArgentCan25=parseFloat(document.getElementById("txtArgentCan25").value);
    Total= (ArgentCan1*0.01)+(ArgentCan5*0.05)+(ArgentCan10*0.10)+(ArgentCan25*0.25)
    console.log("votre total en argent cannadien tire est de :" + Total);

}