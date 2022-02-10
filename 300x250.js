window.googletag = window.googletag || {cmd: []};

// window.location = {};
var cswinlocation = {
    "ancestorOrigins": {},
    "href": "https://tnbclive.com/index.html",
    "origin": "https://tnbclive.com",
    "protocol": "https:",
    "host": "tnbclive.com",
    "hostname": "tnbclive.com",
    "port": "",
    "pathname": "/index.html",
    "search": "",
    "hash": ""
};

// window.location = cswinlocation;

// -- Google tag - Slot Details 
var slotname = '/21730683197/tnbclive.com/homepage';
var adunitCode = ['div-ros-mrec-300x250', 'div-home-world-mpu-300x250-02'];
var adSize = [300, 250];
// -- End of Google tag - Slot Details 

// -- GeoEdge in-page for prebid GAM --
window.grumi = {       
	key: '53e1489b-c32b-4268-9a79-82c47337f4b9'
};
/*var geoedge = document.createElement("script");
geoedge.src="//rumcdn.geoedge.be/53e1489b-c32b-4268-9a79-82c47337f4b9/grumi-ip.js";
geoedge.async = true;
document.head.append(geoedge);*/
// -- End of GeoEdge in-page for prebid GAM --
	
// -- Global site tag (gtag.js) - Google Analytics --
var gtm = document.createElement("script");
gtm.src="https://www.googletagmanager.com/gtag/js?id=UA-113628752-7";
gtm.async = true;
document.head.append(gtm);

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-113628752-7',  {
	page_location: 'https://tnbclive.com',
  page_path: 'index',    
}); 
// -- End of Global site tag (gtag.js) - Google Analytics --

// -- gpt.js - Google Publisher services tag & wrapper for prebid --
var gpt = document.createElement("script");
// gpt.src="https://securepubads.g.doubleclick.net/tag/js/gpt.js";
gpt.src="https://dev.djaxbidder.com/accelarys/gpt/gpt.js";
gpt.async = true;
document.head.append(gpt);

var wrapper = document.createElement("script");
wrapper.src="https://dev.djaxbidder.com/accelarys/openx/v6_5/wrapper.js";
wrapper.async = true;
document.head.append(wrapper);
// -- End of gpt.js - Google Publisher services tag & wrapper for prebid --

// -- Read wrapper for Adunit code & configurations
var rf = '';
// -- End of Read wrapper for Adunit code & configurations 

// -- Google Tag - define Slots and Adunits --
googletag.cmd.push(function() {
	for (var i = 0; i < adunitCode.length; i++) {
		add_slot(slotname, adunitCode[i], adSize);
	}
});

function add_slot(slotname, adunitCode, adSize){
	googletag.defineSlot(slotname, adSize, adunitCode).addService(googletag.pubads());

	googletag.pubads().setTargeting('age', ['18-24', '25-34', '35-44']).setTargeting('gender', ['male', 'female']).setTargeting('cat', ['IAB12']).setTargeting('interest', ['sports', 'travel', 'business', 'lifestyle', 'news']);
	googletag.pubads().updateCorrelator(); 
	googletag.pubads().disableInitialLoad();
	googletag.enableServices();

	div_gtag(adunitCode, adSize);
}
// -- End of Google Tag - define Slots and Adunits --

// Create div for googletag with script
function div_gtag(adunitCode, adSize){
	var gtmdiv = document.createElement('div');
	gtmdiv.id = adunitCode;
	gtmdiv.style = 'width: '+adSize[0]+'px; height: '+adSize[0]+'px;';

	//script inside div
	var gt_div1 = document.createElement('script');
	gt_div1.append("googletag.cmd.push(function() { googletag.display('"+adunitCode+"');});");
	gtmdiv.append(gt_div1); 

	if(document.body != null){
		document.body.append(gtmdiv);	
	}else{	
		var b = document.createElement('body');
		b.append(gtmdiv);
		document.documentElement.appendChild(b);
	}
}

// -- End of Create div for googletag with script --