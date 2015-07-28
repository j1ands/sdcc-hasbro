var s2 = document.createElement('script');
s2.setAttribute("id", "jquery");
s2.src = chrome.extension.getURL('jquery.min.js');

document.body.appendChild(s2);

var s = document.createElement('script');
s.setAttribute("id", "sdcc-script");
s.src = chrome.extension.getURL('script.js');

document.body.appendChild(s);
