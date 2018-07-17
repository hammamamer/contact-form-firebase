$(".color").click(function()
{
	var color=prompt("color");
	$("p").css("color",color);
});
$(".gras").click(function(){
	$("p").css("font-weight","bold");
	$(".gras").css("display","none");
	$(".normal").css("display","inline");
});
$(".normal").click(function(){
	$("p").css("font-weight","normal");
	$(".gras").css("display","inline");
	$(".normal").css("display","none");
});
$(".change").click(function(){
	var change=prompt("change paragraphe");
	$("p").html(change);
});
$(".effacer").click(function()
{
     var effacer=confirm("Vous ete sur");
     if(effacer==true)
     {
     	$("p").html("");
     }

});
$(".effacerdb").dblclick(function()
{
     	$("p").html("");
});
$("img").click(function()
{
    $("img").css("display","none");
    $(".getback").css("display","block");
});
$(".getback").click(function()
{
	$("img").css("display","block")
});
function go()
{
        $(".animation").html("OhMyGod");
}
function is()
{	   
         $(".animation").html("Finaly");
}
function best()
{
      	 $(".animation").html("In GoMyCode");
}
function changing()
{
	setTimeout(go, 500);
	setTimeout(is, 1000);
	setTimeout(best, 1500);
}
setInterval(changing,3000);

