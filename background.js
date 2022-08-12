chrome.commands.onCommand.addListener((command) => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        let current_tab = tabs[0];
        if (current_tab !== undefined && current_tab.url !== undefined && current_tab.url.match('nekto.me/audiochat')) {
            chrome.tabs.sendMessage(current_tab.id, { "command": command });
        }
    })
});
