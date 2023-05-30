$('#btnSubmit').click( ()=>{
    const tbShortened=$('#tbShortened').val() 
    $.post('/shorten',{tbShortened},(data)=>{
        $('#code').html(data)
    })
})