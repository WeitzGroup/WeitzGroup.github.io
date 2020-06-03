function addZ(n) {
  return (n<10? '00' : n<100? '0' : '') + n;
}

(function($) {
    $(document).ready(function() { 
	var imgs = Array(93);
       	for (i = 0; ; i++) {
        	if (i == imgs.length) break;
        	imgs[i] = "mix/" + addZ(i + 1) + "mix.png";
      	}
	$('#Rplot3').scianimator({
	    'images':  imgs,
	    'width': 1000,
	    'delay': 800,
	    'loopMode': 'loop'
	});
	$('#Rplot3').scianimator('play');
    });
})(jQuery);
 
