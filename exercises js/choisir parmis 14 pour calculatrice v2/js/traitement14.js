function btnCalculer_onclick()
{
    if (valideChampsObligatoires() ===true)
    {
        if (valideFormats() ===true)
        {
            saisir();
        }
    }

}

function valideFormats()
{
    var Valide = true;
    if (valideNo1(document.getElementById("txtNbre1").value) === false)
    {
        document.getElementById("txtNbre1").style.backgroundColor = "red";
        Valide = false;
    }
    else
    {
        document.getElementById("txtNbre1").style.backgroundColor = "white";
    }
    if(valideNo2(document.getElementById("txtNbre2").value) === false)
    {
        document.getElementById("txtNbre2").style.backgroundColor = "red";
        Valide = false;
    }
    else
    {
        document.getElementById("txtNbre2").style.backgroundColor = "white";
    }
    if(valideOpe(document.getElementById("txtOperateur").value) === false)
    {
        document.getElementById("txtOperateur").style.backgroundColor = "red";
        Valide = false;
    }
    else
    {
        document.getElementById("txtOperateur").style.backgroundColor = "white";
    }
    return Valide;
}
function valideNo1(Chaine)
{
    return /^[0-9]+$/.test(Chaine);

}
function valideNo2(Chaine)
{
    return /^[0-9]+$/.test(Chaine);

}
function valideOpe(Chaine)
{
    return /^[+\-*/]$/.test(Chaine);


}

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
