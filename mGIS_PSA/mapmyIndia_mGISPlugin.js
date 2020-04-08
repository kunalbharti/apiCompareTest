function initmGIS(client_id, client_secret, stateCode, divID) {
var url;
var iFrameSrc=document.getElementById(divID).src;
if(iFrameSrc==null||iFrameSrc==""){
	

        // calling intercept API
        var settings = {
            "url": "https://mgis.mapmyindia.in/intercept?ci=" + client_id + "&cs=" + client_secret + "&state=" + stateCode,
            "method": "POST"
        };		

        $.ajax(settings).done(function(response) {
			url=response.url;
            var myIframe = document.getElementById(divID);
			myIframe.setAttribute("src", response.url);
        });

	}
		
}