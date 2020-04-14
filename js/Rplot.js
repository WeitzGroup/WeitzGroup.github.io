function addZ(n) {
  return (n<10? '00' : n<100? '0' : '') + n;
}

(function($) {
    $(document).ready(function() { 
	var imgs = Array(43);
       	for (i = 0; ; i++) {
        	if (i == imgs.length) break;
        	imgs[i] = "cases/" + addZ(i + 1) + "cases.png";
      	}
	$('#Rplot').scianimator({
	    'images':  imgs,
	    'width': 1000,
	    'delay': 800,
	    'loopMode': 'loop'
	});
	$('#Rplot').scianimator('play');
    });
})(jQuery);

