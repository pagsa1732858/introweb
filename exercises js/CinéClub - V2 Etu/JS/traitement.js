function btnCalculer_onclick()
{
    var cout,age,total,midi,soir,miSession;

    age = parseInt(document.getElementById("txtAge").value);
    cout = parseInt(document.getElementById("txtBasePrix").value);

      total=cout;
    if(document.getElementById("radMidi").checked==true)
    {
        console.log("vous etes le midi");
    }
    else
    {
        console.log("vous etes le soirs");
    }

    if (document.getElementById("chkMiSession").checked==true)
    {
        if(age<=16)
        {
            total=cout-(cout*60)/100;
        }
        else
        {
            total=cout-(cout*30)/100;
        }
        console.log("votre prix total pour le cine club est:" + total+"$");
    }
   else
   {
       if(age<=16)
       {
           total=cout;
       }
       else
       {
           total=cout;
       }
       console.log("votre prix ne pourra pas avoir de reduction donc votre total sera:" +total+"$");
   }
}