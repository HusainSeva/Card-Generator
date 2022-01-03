function generate(){
	var name = document.getElementById("name").value;
	var namefill = document.getElementById("namefill").innerHTML=name;
	
	var slogan = document.getElementById("slogan").value;
	var sloganfill = document.getElementById("sloganfill").innerHTML=slogan;
	
	var phone = document.getElementById("phone").value;
	var numberfill = document.getElementById("numberfill").innerHTML=phone;
	
	var location = document.getElementById("location").value;
	var adressfill = document.getElementById("adressfill").innerHTML=location;
	
	var link = document.getElementById("link").value;
	var websitefill = document.getElementById("websitefill").innerHTML=link;
	
	var emailid = document.getElementById("emailid").value;
	var emailfill = document.getElementById("emailfill").innerHTML=emailid;
	
	var hd = document.getElementById("hd").style.display='block';
	var txt = document.getElementById("txt").style.display='none';
}