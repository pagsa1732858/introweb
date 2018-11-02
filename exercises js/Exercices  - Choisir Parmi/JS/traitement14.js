function btnCalculer_onclick()
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
    document.getElementById("lblMessage").innerHTML ="votre total est:" +total;
}
