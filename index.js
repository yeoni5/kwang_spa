$('#cv').click(function(){
    $.ajax({
        type: 'get',
        url: 'cv.html',
        dataType: 'html',
        success: function(data){
            $('#cdDiv').html(data);
        }
    });
});