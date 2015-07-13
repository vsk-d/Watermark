var modulePosition = (function(){

}());

$(document).ready(function() {

	$('#left-up').on('click',function(){

		console.log('left-up');
		 $(".result__img-water").position({
     	 my: "left top",
    	  at: "left top",
    	  of: ".result__window"
   		 });
	}); 

	$('#middle-up').on('click',function(){

		console.log('middle-up');
		 $(".result__img-water").position({
     	 my: "center top",
     	 at: "center top",
    	  of: ".result__window"
   		 });
 	});   	

    $('#right-up').on('click',function(){

		console.log('right-up');
	 $(".result__img-water").position({
      my: "right top",
      at: "right top",
      of: ".result__window"
    });
  });  

  	$('#middle-left').on('click',function(){

		console.log('middle-left');
	 $(".result__img-water").position({
      my: "left center",
      at: "left center",
      of: ".result__window"
    });
  });    
  
   $('#middle-middle').on('click',function(){

		console.log('middle-middle');
	 $(".result__img-water").position({
      my: "center center",
      at: "center center",
      of: ".result__window"
    });
  });     

  	$('#middle-right').on('click',function(){

		console.log('middle-right');
	 $(".result__img-water").position({
      my: "right center",
      at: "right center",
      of: ".result__window"
    });
  });    

  	  	$('#down-left').on('click',function(){

		console.log('down-left');
	 $(".result__img-water").position({
      my: "left bottom",
      at: "left bottom",
      of: ".result__window"
    });
  });    
  
   $('#down-middle').on('click',function(){

		console.log('down-middle');
	 $(".result__img-water").position({
      my: "center bottom",
      at: "center bottom",
      of: ".result__window"
    });
  });     

  	$('#down-right').on('click',function(){

		console.log('down-right');
	 $(".result__img-water").position({
      my: "right bottom",
      at: "right bottom",
      of: ".result__window"
    });
  }); 

});