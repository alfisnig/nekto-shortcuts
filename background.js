console.log("ENTER SCRIPT!")

chrome.commands.onCommand.addListener((command) => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        let current_tab = tabs[0];
        chrome.tabs.sendMessage(current_tab.id, { "command": command });
    })
});
