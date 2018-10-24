function btnCalculer_onclick()
{
    var Revenus,Loyer,No,Dep,Reste;

    Revenus=document.getElementById("txtRevenus").value;
    Loyer=parseInt(document.getElementById("txtLoyer").value);
    No=parseFloat(document.getElementById("txtNo").value);
    Dep=parseFloat(document.getElementById("txtDep").value);
    Reste= 12*(Revenus-(Loyer+No+Dep));
    console.log("selon vos revenus il vous reste:" +Reste);
}