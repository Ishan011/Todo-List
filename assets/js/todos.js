// Check off specific Todos by clicking
$("ul").on("click","li",function()
{
	$(this).toggleClass("completed");
});

//Click on X to delete Todo
$("ul").on("click","span",function(event)
{
	//else it will just remove span
	$(this).parent().fadeOut(500,function()
		{
			$(this).remove();
		});
	//else we will end up styling our todo as span is part of li
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event)
{
	// 13 is character key for "Enter" button
	if(event.which === 13)
	{
		// grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		// create new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> "+todoText+"</li>");
	}
});

// toggle add todo button
$(".fa-plus").click(function() {
	$("input[type='text']").fadeToggle();
});