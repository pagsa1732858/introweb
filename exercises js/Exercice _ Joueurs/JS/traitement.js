var compteur=0;
var tabScores = new Array(5);
var TabNomJoueur = new Array(5);





function btnAjouter_onclick()
{
    var scores, nom;
    nom = document.getElementById("txtNom").value;
    scores = parseInt(document.getElementById("txtPoints").value);
    TabNomJoueur[compteur] = nom;
    tabScores[compteur] = scores;

    compteur = compteur + 1;

    document.getElementById("lblNbreJoueur").innerHTML = "Numéro du joueur " + compteur;
    if (compteur > 3)

    {
        document.getElementById("btnTrouverMeilleur").disabled = false;
        document.getElementById("btnTrouverMoy").disabled = false;
        document.getElementById("btnTrouverPire").disabled = false;

    }
}

function btnMoy_onclick()
{
    scores = trouvermoy();
    document.getElementById("lblReponse").innerHTML ="la moyen des scores est:"+scores;
}
function trouverMoy()
{
    var scores=0;
    for(i=0; i<tabScores.length; i++)
    {
        scores = scores + tabScores[i];
    }
    scores=scores/tabScores.length;
    return scores;
}
function trouverMeilleur()
{
    var max=0;
    for (i=0; i<tabScores.length; i++)
    {
        if (tabScores[i] > max)
        {
            max = tabScores[i];
        }
    }
    return max;
}
function btnMeilleur_onclick()
{
  max=trouverMeilleur();
      document.getElementById("lblReponse").innerHTML ="le meilleur scores est:"+max;
}
function trouverpire()
{
    var min=tabScores[0];
    for (i=0; i<tabScores.length; i++)
    {
        if (min > tabScores[i])
        {
            min = tabScores[i];
        }
    }
    return min;
}
function btnPire_onclick()
{
   min = trouverpire();
    document.getElementById("lblReponse").innerHTML ="le pires scores est:"+min;
}
