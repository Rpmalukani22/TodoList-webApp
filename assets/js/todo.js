$('ul').on('click','li',function(){
$(this).toggleClass('checkit');
});
$('ul').on('click','span',function(event){
$(this).parent().fadeOut(500,function(){
	$(this).remove();
});
event.stopPropagation();
});
$("input[type='text']").keypress(function(event){
if(event.which===13){//Enter key pressed!
	
	//catch the text
	var Todotxt=$(this).val();
	//Clear the input box
	$(this).val("");
	//append the new data
	$("ul").append("<li><span>X</span> " + Todotxt + "</li>");
}
});