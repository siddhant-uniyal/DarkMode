let mode = 0

function reportError(e , location){
    console.log({error : e.message , location})
}

const darkModeCSS =  `:root {
                        filter: grayscale(1) invert(1) contrast(0.8);
                    }`

async function toggleMode(){
    mode^=1
    if(!mode){
        try{
            await browser.tabs.removeCSS({
                code : darkModeCSS
            })
        }
        catch(e){
            reportError(e , "removeCSS in toggleMode")
        }
    }
    else{
        try{
            await browser.tabs.insertCSS({
                code : darkModeCSS
            })
        }
        catch(e){
            reportError(e , "insertCSS in toggleMode")
        }
    }
}

try{
    browser.browserAction.onClicked.addListener(toggleMode)
}
catch(e){
    reportError(e , "add listener to browser action click")
}