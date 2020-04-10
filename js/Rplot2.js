function addZ(n) {
  return (n<10? '00' : n<100? '0' : '') + n;
}

(function($) {
    $(document).ready(function() {
	var imgs = Array(39);
	for (i = 0; ; i++) {
        	if (i == imgs.length) break;
        	imgs[i] = "deaths/" + addZ(i + 1) + "deaths.png";
      	}
	$('#Rplot2').scianimator({
	    'images':  imgs,
	    'width': 1000,
	    'delay': 800,
	    'loopMode': 'loop'
	});
	$('#Rplot2').scianimator('play');
    });
})(jQuery);

