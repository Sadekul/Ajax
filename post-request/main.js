$('#button').click(function(){
    var user = $('#name').val();
    var message = $('#msg').val();
    
    $.post('page.php', {uname:user, umsg:message}, function(abc){
        $('#feedback').html(abc)
    });
});
