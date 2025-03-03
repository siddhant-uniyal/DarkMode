(()=>{
    var bodyStyle=document.body.parentElement.style
    browser.runtime.onMessage.addListener((message) => {
        if(message.mode === 0){
            bodyStyle.filter = ''
        }
        else{
            bodyStyle.filter='grayscale(1) invert(1) contrast(0.8)'
        }
    })
})()