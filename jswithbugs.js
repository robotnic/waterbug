/**

This is a javascript file with bugs
*/


//log


waterbug.log("Array",[1,2,3]);

waterbug.log("object",{x:9,ar:[4,5,{t:234}]});

window.onload=function(){
	waterbug.log("dom elements",document.getElementById("heading"));

	document.body.addEventListener("touchstart",function(evt){
		waterbug.log("event",evt);
	},false);
};

//and now the bug
asdf();
