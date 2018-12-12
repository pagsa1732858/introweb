function frmMembre_onclick()
{
    if(valideChampsObligatoires()===true)
    {
        if(valideFormats()===true)
        {
            saisir();
            {
                if(confirm("votre total est:"+resultat)===true)
                {

                }

            }


        }
    }
}
function valideFormats()
{
    var valide=true;
    if(valideCar(document.getElementById("txtVille").value)===false)
    {
        document.getElementById("txtVille").style.borderColor = "red";
        valide = false;
    }
    else
    {
        document.getElementById("txtVille").style.borderColor = "white";
    }
    if(valideCar(document.getElementById("txtNom").value)===false)
    {
        document.getElementById("txtNom").style.borderColor = "red";
        valide = false;
    }
    else
    {
        document.getElementById("txtNom").style.borderColor = "white";
    }
    if(valideCar(document.getElementById("txtPrenom").value)===false)
    {
        document.getElementById("txtPrenom").style.borderColor = "red";
        valide = false;
    }
    else
    {
        document.getElementById("txtPrenom").style.borderColor = "white";
    }
    if(valideCodeP(document.getElementById("txtCodePostal").value)===false)
    {
        document.getElementById("txtCodePostal").style.borderColor = "red";
        valide = false;
    }
    else
    {
        document.getElementById("txtCodePostal").style.borderColor = "white";
    }
    if(valideTel(document.getElementById("txtTel").value)===false)
    {
        document.getElementById("txtTel").style.borderColor = "red";
        valide = false;
    }
    else
    {
        document.getElementById("txtTel").style.borderColor = "white";
    }
    if(valideCodePerm(document.getElementById("txtCodePerm").value)===false)
    {
        document.getElementById("txtCodePerm").style.borderColor = "red";
        valide = false;
    }
    else
    {
        document.getElementById("txtNbre1").style.borderColor = "white";
    }
    if(valideType(document.getElementById("type").value)===false)
    {
        document.getElementById("txtVille").style.borderColor = "red";
        valide = false;
    }
    else
    {
        document.getElementById("txtNbre1").style.borderColor = "white";
    }
  return valide;
}
function valideCar(Chaine)
{
    return /^[A-z]+[\-]?[A-z]+$/.test(Chaine);
}

function valideCodeP(Chaine)
{
    return /^[A-Z]\d[A-Z] \d[A-Z]\d$|^[a-z]\d[a-z] \d[a-z]\d$/.test(Chaine);
}
function valideTel(Chaine)
{
    return /^(\d{3}|\(\d{3}\))\-| \d{3}\-\d{4}$/.test(Chaine);
}

function valideCodePerm(Chaine)
{
    return /^([a-z]{4}|[A-Z]{4})\d{8}$/.test(Chaine);
}

function valideChampsObligatoires()
{
    var valide=false;
    var tableauId =new Array("txtNom","txtPrenom","txtAdresse","txtVille","txtTel");
    var cpt=0;
    for(i=0; i<tableauId.length; i++)
    {
        if(valideExiste(tableauId[i])===true)
        {
            cpt++;
        }
    }
    if(cpt===5)
    {
    valide=true;
    }
    return valide;
}
function valideExiste(tableauId)
{
    var valide=true;
    if(document.getElementById(tableauId).value==="")
    {
        document.getElementById("lblMessageErreur").style.Color = "red";
        document.getElementById("lblMessageErreur").innerHTML = "Tous les champs ayant une etoile sont obligatoires";

    }
    else
    {
        document.getElementById("lblMessageErreur").innerHTML = "";
        valide=true;
    }
        return valide;
}
function saisir()
{
    var nom,prenom,ville,codeP,tel,adresse,CodePerm,type,resultat;
    nom=document.getElementById("txtNom").value;
    prenom=document.getElementById("txtPrenom").value;
    ville=document.getElementById("txtVille").value;
    codeP=parseInt(document.getElementById("txtCodePostal").value);
    adresse=parseInt(document.getElementById("txtAdresse").value);
    CodePerm=parseInt(document.getElementById("txtCodePerm").value);
    type=document.getElementById("type").value;
    tel=parseInt(document.getElementById("txtTel").value);
    resultat=calculer(type);

}
function calculer(type)
{
    var resultat;
    switch(type)
    {
    case"adulte":resultat =90;
        break;
    case"étudiant":resultat =60;
        break;
    case"retraité":resultat =80;
        break;
    }
    return resultat;
}