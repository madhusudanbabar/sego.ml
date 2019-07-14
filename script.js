const typewriter=function (elem,list,speed) {
	this.speed=speed;
	this.list=list;
	this.elem=elem;
	var total=list.length-1;
	change=function(){
		let current = list[Math.floor(Math.random()*total)];
		let w=document.getElementsByTagName('h2')[0];
		w.style.width=w.innerText.length+2+"ch";
		type(current)
	}
	var deleting=false;
	type=function (word) {
		for(letter in word){
			elem.innerHTML="#" +word;
	}
}

	im=function(){
		let body=document.getElementsByTagName('body')[0];
		let image="url('" +Math.floor(Math.random()*8+1) +".jpg')";
		console.log(image);
		body.style.backgroundImage=image;
	}
	setInterval(change,speed);
	setInterval(im,2000);
}


function init() {
	const elem=document.getElementById('elem');
	const list=JSON.parse(elem.getAttribute('list'));
	const speed=parseInt(elem.getAttribute('speed'));
	new typewriter(elem,list,speed);
}

window.onload=init;
