window.fluid.dockBadge = '';
setTimeout(updateDockBadge, 1000);
setTimeout(updateDockBadge, 3000);
setInterval(updateDockBadge, 5000);

var regex = /\s*Inbox\s*\((\d+)\)[^\d]*/;

function updateDockBadge() {
	var newBadge = '';

	// loop thru anchor tags
	var anchorEls = document.getElementsByTagName('a');
	//console.log('anchors: ' + anchorEls.length);

	for (var i = 0; i < anchorEls.length; i++) {
		var anchorEl = anchorEls[i];
		//console.log('anchorEl: '+ anchorEl);

		var text = '' + anchorEl.innerText;
		if (!text.length) continue;
		if (-1 == text.indexOf('(')) continue;
		var res = text.match(regex);
		if (res && res.length > 1) {
			//console.log('res: '+ res);
			newBadge = res[1];
			break;
		}
	}

	window.fluid.dockBadge = newBadge;
}
