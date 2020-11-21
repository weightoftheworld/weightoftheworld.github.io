(function($){

  $(document).ready(function(){
  	$('#toggle-icon').click(function(){
      $(this).toggleClass('open');
  		$('#top-menu').toggleClass('open');
  	});

     $('#field-treatment').multiselect();
     $('#field-mood').multiselect({
        buttonText: function(options, select) {
          if(options.length > 0)
            return options.length + " Moods Selected";
          else
            return 'Video Mood';
        }
     });

  });

})(jQuery);
