$('#cv').click(function(){
    $.ajax({
        type: 'post',
        url: './cv.html',
        dataType: 'html',
        success: function(data){
            $('#cdDiv').html(data);
        }
    });
});