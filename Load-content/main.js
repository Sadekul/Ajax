$('#submit').click(function(){
    $.ajax({
        url:'page.html',
        success: function(abc){
            $('#content').html(abc)
        }
    })
});