$(function(){
   $('#main').fullpage({navigation:true});

     var section=$('.section');
        $('.tubiao').on('click',function(){
            $.fn.fullpage.moveSectionDown();

        })


})