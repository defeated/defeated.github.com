
var flip, front, back
var state = 'front';

$(function(){
	flip = $('#flip');
	front = $('#front');
	back = $('#back');
	
	flip.html(front.html());
});

function swap() {
	if(state == 'front') {
		flip.flip({ color: '#ffffff', speed: 175, direction: 'rl', content: back.html(), onEnd: function(){ state = 'back' }});
	}
	else {
		flip.flip({ color: '#ffffff', speed: 175, direction: 'lr', content: front.html(), onEnd: function(){ state = 'front' }});
	}
}
