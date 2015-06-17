(function () {

  if (!window.fluid) {
    alert("This script is meant to be run in Fluid! You should disable it.");
    return;
  }

  window.fluid.dockBadge = '';
  setInterval(newNotif, 500);

  var old_badge_count = 0;


  function update_dock_badge() {
    var new_badge_count = '';

    if (old_badge_count && old_badge_count.length >= 1) {
      new_badge_count = old_badge_count;
      console.log('new_badge_count: ' + new_badge_count);
      console.log('old_badge_count: ' + old_badge_count);
    }
    window.fluid.dockBadge = new_badge_count;
  }

  function newNotif() {

    var notification_count = document.getElementsByClassName('js-unread-note-count')[0]
    var notification_message = "";

    if (notification_count.innerHTML != old_badge_count){

      old_badge_count = notification_count.innerHTML;
      update_dock_badge();
      window.fluid.playSound("Basso")
      if(notification_count.innerHTML > 0)
      {
        if(notification_count.innerHTML == 1)
        {
          notification_message = "You have one new notification";
        }
        else
        {
          notification_message = "You have "+ notification_count.innerHTML + " new notifications";
        }
        window.fluid.showGrowlNotification({
          title: "Trello",
          description: notification_message,
          priority: 1,
          sticky: true,
          onclick: window.fluid.activate()
          identifier: "Trello Notifier",
          icon: "http://f.cl.ly/items/313B3P1Z0Z043Q050X1L/trello.png"

        })
      }
    }

  }

})();