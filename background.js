// a listening event for 'runtime.onInstalled' in the background script
chrome.runtime.onInstalled.addListener(function () {
    // chrome.storage API: allow multiple extension components to access/update
    chrome.storage.sync.set({ color: '#3aa757' }, function () {
      console.log('The color is green.');
    });
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {hostEquals: 'developer.chrome.com'},
        })
        ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
      }]);
    });
  });