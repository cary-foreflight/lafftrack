browser.browserAction.onClicked.addListener(function() {
    browser.windows.create({
      url: browser.runtime.getURL("popup.html"),
      type: "popup",
      width: 400,
      height: 600,
      allowScriptsToClose: true
    });
  });