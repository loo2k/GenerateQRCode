
function updateQR() {
    chrome.tabs.getSelected(function(tab) {
        console.log(tab);

        // 检查是否存在二维码
        var qrcode = document.getElementById('l2QRcode');
        if( qrcode ) {
            qrcode.parentNode.removeChild(qrcode);
        }

        // 声明 API
        var api  = 'https://chart.googleapis.com/chart?cht=qr&chs=200x200&choe=UTF-8&chld=L|1&chl=';
        var href = encodeURIComponent(tab.url);
        var qr   = new Image();
        qr.id = 'l2QRcode';
        qr.src = api + href;
        qr.height = '200';
        qr.width = '200';
        qr.setAttribute('title', tab.title);
        document.body.appendChild(qr);
        qr.onclick = function() {
            console.log(chrome.browserAction);
        }
    });
}

chrome.browserAction.onClicked.addListener(updateQR);
updateQR();