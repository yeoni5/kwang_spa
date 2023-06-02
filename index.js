$('#cv').click(function(){
    $.ajax({
        type: 'post',
        url: './cv.html',
        dataType: 'text',
        success: function(data){
            $('#cdDiv').html(data);
        }
    });
});