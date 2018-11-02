function btnCalculer_onclick()
{ 
 	var jours;
        jours= parseInt(document.getElementById("txtNumSem").value);
        switch(jours)
        {
            case 1:
                jours = "dimanche";
                break;
            case 2:
                jours = "lundie";
                break;
            case 3:
                jours = "mardie";
                break;
            case 4:
                jours = "mercredie";
                break;
            case 5:
                jours = "jeudi";
                break;
            case 6:
                jours = "vendredie";
                break;
            case 7:
                jours = "samedie";
                break;

        }
        document.getElementById("lblMessage").innerHTML ="nous somme:" +jours;
}