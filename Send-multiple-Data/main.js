$('#submit').click(function(){
   var uname = $('#name').val();
    
    $.ajax({
        type: 'POST',
        url: 'page.php',
        data: 'user=' + uname,
        success:function(data){
            $('#content').html(data);
        }
    });

});