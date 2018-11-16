
function valideExiste(tabId)
{
  var valide=false;
   if(document.getElementById(tabId).value ==="")
   {
       document.getElementById(tabId).style.backgroundColor = "red";
   }
   else
   {
       document.getElementById(tabId).style.backgroundColor = "white";
           valide=true;
   }
   return valide;

}
function valideChampsObligatoires()
{
    var tabId =new Array("txtNbre1","txtNbre2","txtOperateur");
    var cpt=0;
    var valide=false;
    for(i=0; i<tabId.length; i++)
    {
         if(valideExiste(tabId[i]))
        {
             cpt++;
        }
    }
    if(3 === cpt)
    {
        valide=true;
    }
    return valide
}

function saisir()
{
    var nbre1,nbre2,ope,total;
    nbre1= parseInt(document.getElementById("txtNbre1").value);
    nbre2= parseInt(document.getElementById("txtNbre2").value);
    ope= document.getElementById("txtOperateur").value;

    total = calculer(nbre1,nbre2,ope);
    document.getElementById("lblMessage").innerHTML ="votre total est:" +total;
}
function btnCalculer_onclick()
{
    if(valideChampsObligatoires()===true)
    {
        saisir();
    }


}
function calculer(nbre1,nbre2,ope)
{
  var total;
    switch(ope)
    {
        case "+": total=nbre1+nbre2;
            break;
        case "-": total=nbre1-nbre2;
            break;
        case "*": total=nbre1*nbre2;
            break;
        case "/": total=nbre1/nbre2;
            break;
    }
    return total;
}