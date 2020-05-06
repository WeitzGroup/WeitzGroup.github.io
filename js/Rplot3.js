function addZ(n) {
  return (n<10? '00' : n<100? '0' : '') + n;
}

(function($) {
    $(document).ready(function() { 
	var imgs = Array(65);
       	for (i = 0; ; i++) {
        	if (i == imgs.length) break;
        	imgs[i] = "mix/" + addZ(i + 1) + "mix.png";
      	}
	$('#Rplot3').scianimator({
	    'images':  imgs,
	    'width': 500,
	    'delay': 800,
	    'loopMode': 'loop'
	});
	$('#Rplot3').scianimator('play');
    });
})(jQuery);
