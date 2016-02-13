
	$(document).ready(function(){
   var scroll_start = 0;
   var startchange = $('#startchange');
   console.log("working");
   var offset = startchange.offset();
    if (startchange.length){
   $(document).scroll(function() {
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $(".navbar-default").css('background-color', '#ffffff').css('box-shadow', '1px 1px 5px #888888');
       } else {
          $('.navbar-default').css('background-color', 'transparent').css('box-shadow', 'none');
       }
   });
    }
});
