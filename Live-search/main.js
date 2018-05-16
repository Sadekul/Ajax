$('#search').keyup(function(){
   var s = $('#search').val();
    
    
    $.ajax({
        url: 'search.php',
        data: 'usearch='+s,
        success: function(abc){
            $('#feedback').html(abc)
        }
    })
});