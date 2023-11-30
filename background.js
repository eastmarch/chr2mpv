'use strict';

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: 'chr2mpv',
    title: 'Play link in MPV',
    contexts: ['link'],
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId == 'chr2mpv') playInMPV(tab.id, info.linkUrl, false);
});

chrome.action.onClicked.addListener((tab) => {
  playInMPV(tab.id, tab.url, true);
});

function playInMPV(tabID, targetURL, pausePlayback) {
  let link = targetURL.replace(new RegExp('^(http|https)://', 'i'), 'ytdl://');
  chrome.scripting.executeScript({
    target: { tabId: tabID },
    func: redirectMPV,
    args: [link, pausePlayback],
  });
}

function redirectMPV(redirectURL, pausePlayback) {
  if (pausePlayback) {
    let htmlPlayer = document.querySelector('video');
    if (htmlPlayer) {
      htmlPlayer.pause();
    }
  }
  window.location.href = redirectURL;
}
