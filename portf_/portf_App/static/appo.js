
$(document).ready(function(){
    $('#sidebarCollapse').on('click',function(){
        $('#sidebar').toggleClass('active');
        console.log('new')
    });
});

$(document).ready(function(){
    $('.new').on('click',function(){
        $('.active').toggleClass('active');
    });
});