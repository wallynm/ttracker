window.popupWindow = function(url, title, w, h, target) {
  if(typeof target == undefined ){
    target == '';
  }
  else {
    target = target+',';
  }

  var left = (screen.width/2)-(w/2);
  var top = (screen.height/2)-(h/2);
  var win = window.open(url, title, target+'_blank, resizable=yes, toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);

  if (typeof(win) !== 'undefined') {
    win.focus();
  }

  return win;
}
