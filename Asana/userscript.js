// For use with fluidapp.com (pro version)
// For Google Chrome/Firefox/Safari: https://greasyfork.org/en/scripts/6118-asana-notifications-favicon

(function() {
    // changes the favicon. avoids setting the same favicon twice.
    function updateFavicon(unread) {
    	if(this.lastState != unread) { // ensures we're not changing the icon all the time
            window.fluid.dockBadge = unread ? '●' : '';
            this.lastState = unread;
        }
    }

    // checks read count and updates favicon if necessary
    function updateRead(title) {
        var unread = title.indexOf("●") == 0;
        updateFavicon(unread);
    }

    // observes any changes in the title and checks for the unread mark
    function install() {
        var titleNode = document.querySelector('head > title');
        this.observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                var newTitle = mutation.target.textContent;
	            updateRead(newTitle);
            });
        });
        observer.observe(titleNode, { subtree: true, characterData: true, childList: true }); // options counter-intuitive to me, but are required, not too expensive
        updateRead(document.title); // make sure it's up to date before first event
    }

    install();
})();