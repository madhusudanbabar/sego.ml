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
		// let image="url('" +Math.floor(Math.random()*8+1) +".jpg')";
		var image=select(Math.floor(Math.random()*8+1));
		console.log(image);
		body.style.backgroundImage=image;
	}
	setInterval(change,speed);
	setInterval(im,2000);
}

function select(num){
	switch (num) {
		case 1:
			return "https://res.cloudinary.com/krypt9/image/upload/v1563087137/sego.ml/1_cffyet.jpg";
			break;

		case 2:
			return "https://res.cloudinary.com/krypt9/image/upload/v1563087137/sego.ml/2_v2mwds.jpg";
			break;

		case 3:
			return "https://res.cloudinary.com/krypt9/image/upload/v1563087136/sego.ml/3_m0srcj.jpg";
			break;

		case 4:
			return "https://res.cloudinary.com/krypt9/image/upload/v1563087136/sego.ml/4_uyzhek.jpg";
			break;

		case 5:
			return "https://res.cloudinary.com/krypt9/image/upload/v1563087134/sego.ml/5_mb3hhp.jpg";
			break;

		case 6:
			return "https://res.cloudinary.com/krypt9/image/upload/v1563087136/sego.ml/6_musvzh.jpg";
			break;

		case 7:
			return "https://res.cloudinary.com/krypt9/image/upload/v1563087137/sego.ml/7_a0z5wh.jpg";
			break;

		case 8:
			return "https://res.cloudinary.com/krypt9/image/upload/v1563087136/sego.ml/8_tsd7qw.jpg";
			break;

		case 9:
			return "https://res.cloudinary.com/krypt9/image/upload/v1563087135/sego.ml/9_qdot9c.jpg";
			break;

		case 10:
			return "https://res.cloudinary.com/krypt9/image/upload/v1563087135/sego.ml/10_nsegh4.jpg";
			break;

		default:
			return "https://res.cloudinary.com/krypt9/image/upload/v1563087135/sego.ml/img_gvcgsz.jpg";
			break;

	}
}


function init() {
	const elem=document.getElementById('elem');
	const list=JSON.parse(elem.getAttribute('list'));
	const speed=parseInt(elem.getAttribute('speed'));
	new typewriter(elem,list,speed);
}

window.onload=init;
