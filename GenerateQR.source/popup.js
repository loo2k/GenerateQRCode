
function updateQR() {
	chrome.tabs.getSelected(function(tab) {
		console.log(tab);

		// 检查是否存在二维码
		var qrcode = document.getElementById('l2QRcode');
		if( qrcode ) {
			qrcode.parentNode.removeChild(qrcode);
		}

		// 生成二维码
		var dataURL = qr.toDataURL({
			mime: 'image/jpeg',
			value: tab.url,
			size: 6
		});

		var qrimg = new Image();
		qrimg.id = 'l2QRcode';
		qrimg.src = dataURL;
		// qrimg.height = '200';
		// qrimg.width = '200';
		qrimg.setAttribute('title', tab.title);
		document.body.appendChild(qrimg);
		qrimg.onclick = function() {
			window.close();
		};

	});
}

chrome.browserAction.onClicked.addListener(updateQR);
updateQR();