$('ul').on("click","li",function(){
    $(this).toggleClass('selected');
});

$('ul').on("click","span",function(event){
    $(this).parent().fadeOut(300,function(){
        $(this).remove();});
        event.stopPropagation();
});

$("input[type='text']").on("keypress",function(event){
    if(event.which === 13){
        var todoText = $(this).val();
        $(this).val("");
        $('ul').append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText +"</li>");
    }
});