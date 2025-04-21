'use strict';

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: 'chr2mpv',
    title: 'Play link in MPV',
    contexts: ['link'],
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId == 'chr2mpv'){
    playInMPV(tab.id, info.linkUrl, false);
  }
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
  window.location.href = redirectURL;
  if (pausePlayback) {
    const pageVideos = document.querySelectorAll('video');
    for (const video of pageVideos) {
      video.pause();
    }
  }
}
