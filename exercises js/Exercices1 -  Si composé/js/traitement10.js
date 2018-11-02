function btnCalculer_onclick()
{
    // déclaration des variables
    var age,cathegorie;
    age=document.getElementById("txtAge").value;
    if ((age >= 6) && (age <= 8))
    {
        cathegorie="poussin";
    }
    else
    {
        if ((age >= 9) && (age <= 10))
        {
            cathegorie="pupille";
        }
        else
        {
            if ((age >= 11) && (age <= 12))
            {
                cathegorie="minime";
            }
            else
            {
                cathegorie="cadet";
            }
        }
        document.getElementById("lblMessage").innerHTML =cathegorie;
    }
}