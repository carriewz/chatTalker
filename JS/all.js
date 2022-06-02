$(document).ready(function(){
    
    $('.top a').click(function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop:0 },1000);
    });
    $(window).on('scroll',function(){
        
        if($(this).scrollTop() > 10){
            $('.top').show();
        }
        else{
            $('.top').stop().hide();
        }
    });
      
    $('.planlist a').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $(this).parent().siblings().find('a').removeClass('active');
        switch ($(this).text()){
            case '10000位':{
                $('.qty').text('10000');
                $('.money').text('600');
                $('.money-standard').text('1600');
                break;
            };
            case '15000位':{
                $('.qty').text('15000');
                $('.money').text('500');
                $('.money-standard').text('1500');
                break;
            };
            case '20000位':{
                $('.qty').text('20000');
                $('.money').text('400');
                $('.money-standard').text('1400');
                break;
            };
            case '25000位':{
                $('.qty').text('25000');
                $('.money').text('300');
                $('.money-standard').text('1300');
                break;
            };
            case '>25000位':{
                $('.qty').text('>25000');
                $('.money').text('200');
                $('.money-standard').text('1200');
                break;
            };
        };
    
     });

     $('.questionlist a').click(function(e){
        e.preventDefault();
        $(this).siblings('p').toggle('slow');
        $(this).find('.plus').toggle('fast');
        $(this).find('.minus').toggle('fast');      
    });  
});




