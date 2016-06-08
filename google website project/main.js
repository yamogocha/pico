var optionBox = false;

var showOptions =function(){
	if(optionBox===false){
		document.getElementById("option-box").style.display ="block";
		optionBox=true;
	}else{
		document.getElementById("option-box").style.display ="none";
		optionBox=false;
	}
}