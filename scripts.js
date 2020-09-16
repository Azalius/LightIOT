baseURL="http://192.168.1.100"

function setLampe1(val){
	httpGet(baseURL+"/1="+val)
}
function setLampe2(val){
	httpGet(baseURL+"/2="+val)
}

function httpGet(theUrl)
{
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    
    xmlhttp.open("GET", theUrl, false );
    xmlhttp.send();    
}