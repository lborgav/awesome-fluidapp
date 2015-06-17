window.fluid.dockBadge = '';
setTimeout(updateDockBadge, 1000);
setTimeout(updateDockBadge, 3000);
setInterval(updateDockBadge, 5000);

function updateDockBadge() {
	var newBadge = '';

	var regex = /\s*\((\d+)\)\s*/;

	var text = '' + document.title;
	if (text.length) {
		console.log('text: ' + text);
		var res = text.match(regex);
		console.log('res: ' + res);
		if (res && res.length > 1) {
			newBadge = res[1];
			//console.log('newBadge: ' + newBadge);
		}
	}
	window.fluid.dockBadge = newBadge;
}