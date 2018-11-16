
function valideExiste(nomId)
{
  var valide=false;
   if(document.getElementById(nomId).value ==="")
   {
       document.getElementById(nomId).style.backgroundColor = "red";
   }
   else
   {
       document.getElementById(nomId).style.backgroundColor = "white";
           valide=true;
   }
   return valide;

}
function valideChampsObligatoires()
{

    var valide=false;
    if( valideExiste("txtNbre1") && valideExiste("txtNbre2") &&valideExiste("txtOperateur") )
    {
        valide=true;
    }
    return valide;
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