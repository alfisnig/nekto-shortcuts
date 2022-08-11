chrome.runtime.onMessage.addListener((data, sender, sendResponse) => {
    execute_command(data.command)
});


function execute_command(command) {
    switch (command) {
        case "start_dialog":
            start_dialog();
            break;
        case "finish_dialog":
            finish_dialog();
            break;
    }
}


function start_dialog() {
    let scan_button = document.getElementsByClassName("scan-button")[0];
    let go_scan_button = document.getElementsByClassName("go-scan-button")[0];
    console.log(scan_button)
    if (scan_button !== null && scan_button !== undefined)
        scan_button.click();
    else if (go_scan_button !== null && go_scan_button !== undefined)
        go_scan_button.click();
}


function finish_dialog() {
    let stop_talk_button = document.getElementsByClassName("stop-talk-button")[0];
    let stop_scan_button = document.getElementsByClassName("stop-scan-button")[0];

    if (stop_talk_button !== null && stop_talk_button !== undefined) {
        stop_talk_button.click();
        let confirm_button = document.getElementsByClassName("swal2-confirm")[0];
        confirm_button.click();
    } else if (stop_scan_button !== null && stop_scan_button !== undefined) {
        stop_scan_button.click();
    }
}
