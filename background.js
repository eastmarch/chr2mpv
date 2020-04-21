'use strict';

chrome.runtime.onInstalled.addListener(function() {
  chrome.contextMenus.create({
    id: "chr2mpv",
    title: "Play link in MPV",
    contexts: ["link"],
  });
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId == "chr2mpv") playInMPV(info.linkUrl);
});

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({code: `(${String(pausePlayback)})();`});
  playInMPV(tab.url);
});

function playInMPV(targetURL) {
  var link = new URL(targetURL);
  link.protocol = "ytdl:";
  // chrome.tabs.update({ url: link.href });
  chrome.tabs.executeScript({code: `window.location.href = "${link.href}";`});
}

function pausePlayback() {
  var htmlPlayer = document.querySelector("video");
  if(htmlPlayer != null) {
    htmlPlayer.pause();
  }
}
