function updateQR() {
	chrome.tabs.getSelected(function(tab) {
		console.log(tab);

		var qrcode = new QRCode("qrcode", {
			text: tab.url,
			width: 160,
			height: 160,
			colorDark : "#000000",
			colorLight : "#ffffff",
			correctLevel : QRCode.CorrectLevel.L
		});

	});
}

document.getElementById('qrcode').addEventListener('click', function(e) {
	window.close();
});
chrome.browserAction.onClicked.addListener(updateQR);
updateQR();