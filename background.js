mode = 0
function reportError(e){
    console.log({error : e.message})
}
function toggleMode(){
    mode^=1
    browser.tabs
        .query({ active : true , currentWindow : true})
        .then((tabs) => {
            browser.tabs.sendMessage(tabs[0].id , {
                mode
            })
        })
        .catch(reportError)
}
browser.browserAction.onClicked.addListener(toggleMode)