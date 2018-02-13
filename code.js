var selected_option,no,coin;
alert("Choose the coin for toss either head or tail:")
function sethead()
{
    document.getElementById("btnhead").disabled = true;
    selected_option="Head"
    alert("You selected "+selected_option);
    
   // .setAttribute('disabled','disabled')
}
function settail()
{
    document.getElementById("btntail").disabled = true;
    selected_option="Tail"
    alert("You selected "+selected_option);
}
function start_toss()
{
    if(selected_option!== undefined)
    {
        no=Math.floor(Math.random()*2);
        if(no===1)
        coin="Head";
        else if (no==0)
        coin="Tail"
        if(selected_option===coin)
        alert("You WIN the Toss");
        else
        alert("You LOSE")
       
    }
    else
    alert("Please select some option");
    
}
function cancel_toss()
{
    selected_option=undefined;
}
