
function valideExiste(nomId)
{
    valide=false;
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

    valide=false;
    if( valideExiste("txtNbre1") && valideExiste("txtNbre2") &&valideExiste("txtOperateur") )
    {
        valide=true;
    }
    return valide;
}
function saisir()
{
    total = calculer();
    document.getElementById("lblMessage").innerHTML ="votre total est:" +total;
}
function btnCalculer_onclick()
{
    if(valideChampsObligatoires()===true)
    {
        saisir();
    }


}
function calculer()
{
    var nbre1,nbre2,ope,total;
    nbre1= parseInt(document.getElementById("txtNbre1").value);
    nbre2= parseInt(document.getElementById("txtNbre2").value);
    ope= document.getElementById("txtOperateur").value;

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