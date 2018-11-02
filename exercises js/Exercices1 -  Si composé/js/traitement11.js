function btnCalculer_onclick()
{
    // déclaration des variables
    var nbre1,nbre2,signe;

    nbre1= parseFloat(document.getElementById("txtNbre1").value);
    nbre2= parseFloat(document.getElementById("txtNbre2").value);
    if((nbre1>=0)&&(nbre2>+0)|| (nbre1<=0)&&(nbre2<=0))
    {
        signe="positif";
    }
    else
    {
        signe="negatif";
    }
    document.getElementById("lblMessage").innerHTML =signe;
}


